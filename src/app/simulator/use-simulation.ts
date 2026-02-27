'use client';

import { useRef, useCallback, useEffect } from 'react';

const DEFAULT_TURN_RATE = 0.6;
const TURN_THRESHOLD = 0.2007; // 11.5 degrees in radians
const ARRIVAL_THRESHOLD = 2;
const HERO_RADIUS = 20;

interface SimulationState {
  heroX: number;
  heroY: number;
  facingAngle: number;
  targetX: number | null;
  targetY: number | null;
  moveSpeed: number;
  turnRate: number;
  lastTime: number | null;
  animFrameId: number | null;
  clickMarkers: { x: number; y: number; time: number }[];
  rightMouseDown: boolean;
}

export function useSimulation(canvasRef: React.RefObject<HTMLCanvasElement | null>, containerRef: React.RefObject<HTMLDivElement | null>) {
  const stateRef = useRef<SimulationState>({
    heroX: 0,
    heroY: 0,
    facingAngle: -Math.PI / 2,
    targetX: null,
    targetY: null,
    moveSpeed: 300,
    turnRate: DEFAULT_TURN_RATE,
    lastTime: null,
    animFrameId: null,
    clickMarkers: [],
    rightMouseDown: false,
  });

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const w = container.clientWidth;
    const h = container.clientHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }, [canvasRef, containerRef]);

  const update = useCallback((dt: number) => {
    const s = stateRef.current;
    if (s.targetX === null || s.targetY === null) return;

    const dx = s.targetX - s.heroX;
    const dy = s.targetY - s.heroY;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < ARRIVAL_THRESHOLD) {
      s.heroX = s.targetX;
      s.heroY = s.targetY;
      s.targetX = null;
      s.targetY = null;
      return;
    }

    const desiredAngle = Math.atan2(dy, dx);
    let angleDiff = desiredAngle - s.facingAngle;
    while (angleDiff > Math.PI) angleDiff -= 2 * Math.PI;
    while (angleDiff < -Math.PI) angleDiff += 2 * Math.PI;

    const angularVelocity = s.turnRate / 0.03;
    const maxTurn = angularVelocity * dt;

    if (Math.abs(angleDiff) <= maxTurn) {
      s.facingAngle = desiredAngle;
    } else {
      s.facingAngle += Math.sign(angleDiff) * maxTurn;
    }

    while (s.facingAngle > Math.PI) s.facingAngle -= 2 * Math.PI;
    while (s.facingAngle < -Math.PI) s.facingAngle += 2 * Math.PI;

    if (Math.abs(angleDiff) <= TURN_THRESHOLD) {
      const step = s.moveSpeed * dt;
      const moveD = Math.min(step, dist);
      s.heroX += Math.cos(s.facingAngle) * moveD;
      s.heroY += Math.sin(s.facingAngle) * moveD;
    }
  }, []);

  const render = useCallback((timestamp: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const s = stateRef.current;
    const w = canvas.width / dpr;
    const h = canvas.height / dpr;

    ctx.fillStyle = '#0a0a0a';
    ctx.fillRect(0, 0, w, h);

    // Grid
    ctx.strokeStyle = 'rgba(255,255,255,0.03)';
    ctx.lineWidth = 1;
    for (let x = 0; x < w; x += 50) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
    }
    for (let y = 0; y < h; y += 50) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
    }

    // Click markers
    s.clickMarkers = s.clickMarkers.filter((m) => timestamp - m.time < 800);
    for (const m of s.clickMarkers) {
      const alpha = 1 - (timestamp - m.time) / 800;
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.strokeStyle = '#e94560';
      ctx.lineWidth = 2;
      const sz = 8;
      ctx.beginPath(); ctx.moveTo(m.x - sz, m.y - sz); ctx.lineTo(m.x + sz, m.y + sz); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(m.x + sz, m.y - sz); ctx.lineTo(m.x - sz, m.y + sz); ctx.stroke();
      ctx.restore();
    }

    // Path line
    if (s.targetX !== null && s.targetY !== null) {
      ctx.save();
      ctx.strokeStyle = 'rgba(233,69,96,0.15)';
      ctx.lineWidth = 1;
      ctx.setLineDash([6, 4]);
      ctx.beginPath(); ctx.moveTo(s.heroX, s.heroY); ctx.lineTo(s.targetX, s.targetY); ctx.stroke();
      ctx.setLineDash([]);
      ctx.restore();
    }

    // Hero circle
    ctx.beginPath();
    ctx.arc(s.heroX, s.heroY, HERO_RADIUS, 0, Math.PI * 2);
    ctx.fillStyle = '#3498db';
    ctx.fill();
    ctx.strokeStyle = '#2980b9';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Facing indicator
    ctx.save();
    ctx.translate(s.heroX, s.heroY);
    ctx.rotate(s.facingAngle);
    ctx.beginPath();
    ctx.moveTo(HERO_RADIUS + 8, 0);
    ctx.lineTo(HERO_RADIUS - 2, -5);
    ctx.lineTo(HERO_RADIUS - 2, 5);
    ctx.closePath();
    ctx.fillStyle = '#fff';
    ctx.fill();
    ctx.restore();
  }, [canvasRef]);

  const gameLoop = useCallback((timestamp: number) => {
    const s = stateRef.current;
    if (s.lastTime === null) s.lastTime = timestamp;
    let dt = (timestamp - s.lastTime) / 1000;
    if (dt > 0.1) dt = 0.1;
    s.lastTime = timestamp;

    update(dt);
    render(timestamp);
    s.animFrameId = requestAnimationFrame(gameLoop);
  }, [update, render]);

  const start = useCallback((ms: number, tr: number | null) => {
    const s = stateRef.current;
    const canvas = canvasRef.current;
    if (!canvas) return;

    resizeCanvas();
    const dpr = window.devicePixelRatio || 1;

    s.moveSpeed = ms;
    s.turnRate = tr != null ? tr : DEFAULT_TURN_RATE;
    s.heroX = canvas.width / dpr / 2;
    s.heroY = canvas.height / dpr / 2;
    s.facingAngle = -Math.PI / 2;
    s.targetX = null;
    s.targetY = null;
    s.clickMarkers = [];
    s.lastTime = null;

    if (s.animFrameId) cancelAnimationFrame(s.animFrameId);
    s.animFrameId = requestAnimationFrame(gameLoop);
  }, [canvasRef, resizeCanvas, gameLoop]);

  const stop = useCallback(() => {
    const s = stateRef.current;
    if (s.animFrameId) {
      cancelAnimationFrame(s.animFrameId);
      s.animFrameId = null;
    }
  }, []);

  const handleMouseDown = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    if (e.button === 2) {
      const s = stateRef.current;
      s.rightMouseDown = true;
      const rect = (e.target as HTMLCanvasElement).getBoundingClientRect();
      s.targetX = e.clientX - rect.left;
      s.targetY = e.clientY - rect.top;
      s.clickMarkers.push({ x: s.targetX, y: s.targetY, time: performance.now() });
    }
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const s = stateRef.current;
    if (!s.rightMouseDown) return;
    const rect = (e.target as HTMLCanvasElement).getBoundingClientRect();
    s.targetX = e.clientX - rect.left;
    s.targetY = e.clientY - rect.top;
  }, []);

  const handleMouseUp = useCallback((e: MouseEvent) => {
    if (e.button === 2) stateRef.current.rightMouseDown = false;
  }, []);

  const handleStop = useCallback(() => {
    stateRef.current.targetX = null;
    stateRef.current.targetY = null;
  }, []);

  useEffect(() => {
    const handleResize = () => resizeCanvas();
    const handleUp = (e: MouseEvent) => handleMouseUp(e);
    window.addEventListener('resize', handleResize);
    document.addEventListener('mouseup', handleUp);
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mouseup', handleUp);
      stop();
    };
  }, [resizeCanvas, handleMouseUp, stop]);

  return { start, stop, handleMouseDown, handleMouseMove, handleStop };
}
