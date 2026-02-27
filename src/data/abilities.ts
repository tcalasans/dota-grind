import { AbilitiesMap } from '@/types/ability';

export const ABILITIES: AbilitiesMap = {
  "abaddon_death_coil": {
    "dname": "Mist Coil",
    "img": "/apps/dota2/images/dota_react/abilities/abaddon_death_coil.png",
    "desc": "Abaddon releases a coil of deathly mist that can damage an enemy unit or heal a friendly unit at the cost of some of Abaddon's health.",
    "behavior": "Unit Target",
    "dmg_type": "Magical",
    "cd": [
      "8",
      "7",
      "6",
      "5"
    ],
    "mc": [
      "50",
      "55",
      "60",
      "65"
    ]
  },
  "snapfire_buckshot": {
    "dname": "Buckshot",
    "img": "/apps/dota2/images/dota_react/abilities/snapfire_buckshot.png",
    "desc": "When attacking enemy heroes, Snapfire deals 30% more damage with her auto attacks, but has a 25% chance of a glancing shot, dealing 60% damage.",
    "behavior": "Passive"
  },
  "abyssal_underlord_atrophy_aura": {
    "dname": "Atrophy Aura",
    "img": "/apps/dota2/images/dota_react/abilities/abyssal_underlord_atrophy_aura.png",
    "desc": "Nearby enemy units are weakened, losing a portion of their base damage. If an enemy dies while under this effect, Underlord gains temporary bonus damage.",
    "behavior": "Passive",
    "dmg_type": "Physical"
  },
  "morphling_morph_replicate": {
    "dname": "Morph Replicate",
    "img": "/apps/dota2/images/dota_react/abilities/morphling_morph_replicate.png",
    "desc": "Toggles Morphling's form between his own and the replicated enemy.",
    "behavior": [
      "No Target",
      "Hidden",
      "Instant Cast"
    ],
    "cd": "2",
    "mc": "0"
  },
  "spectre_haunt": {
    "dname": "Haunt",
    "img": "/apps/dota2/images/dota_react/abilities/spectre_haunt.png",
    "desc": "Creates a spectral nemesis to haunt all enemy Heroes.\n\nHaunt illusions are uncontrollable, take extra damage, and deal less damage than Spectre herself. They ignore terrain.\n\nThe Reality sub-ability may be used to teleport to the illusion, destroying it.",
    "behavior": "No Target",
    "bkbpierce": "Yes",
    "cd": [
      "180",
      "160",
      "140"
    ],
    "mc": [
      "125",
      "150",
      "175"
    ]
  },
  "skeleton_king_mortal_strike": {
    "dname": "Mortal Strike",
    "img": "/apps/dota2/images/dota_react/abilities/skeleton_king_mortal_strike.png",
    "desc": "Wraith King passively deals bonus damage on an attack with a cooldown.",
    "behavior": "Passive",
    "cd": [
      "6",
      "5.5",
      "5",
      "4.5"
    ]
  },
  "bloodseeker_sanguivore": {
    "dname": "Sanguivore",
    "img": "/apps/dota2/images/dota_react/abilities/bloodseeker_sanguivore.png",
    "desc": "Bloodseeker restores some life when he kills a unit, equal to 30 health plus a percentage of the units max health.\n\nRestores for half values if an ally kills a nearby enemy hero.",
    "behavior": "Passive",
    "bkbpierce": "Yes"
  },
  "juggernaut_duelist": {
    "dname": "Duelist",
    "img": "/apps/dota2/images/dota_react/abilities/juggernaut_duelist.png",
    "desc": "Juggernaut deals 12% more damage to targets that are facing him. Damage bonus always applies during Omnislash.",
    "behavior": "Passive"
  },
  "warlock_upheaval": {
    "dname": "Upheaval",
    "img": "/apps/dota2/images/dota_react/abilities/warlock_upheaval.png",
    "desc": "CHANNELED - A powerful slowing and damaging current that grows stronger as it's channeled. Lasts up to 10 seconds. Enemies are slowed for 1 second after leaving the area or the spell ends.",
    "behavior": [
      "Point Target",
      "Channeled",
      "AOE"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "60",
      "50",
      "40",
      "30"
    ],
    "mc": "100",
    "dmg": "0"
  },
  "dark_seer_vacuum": {
    "dname": "Vacuum",
    "img": "/apps/dota2/images/dota_react/abilities/dark_seer_vacuum.png",
    "desc": "Dark Seer creates a vacuum over the target area that sucks in enemy units, disrupting them and dealing damage.",
    "behavior": [
      "Point Target",
      "AOE"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "60",
      "50",
      "40",
      "30"
    ],
    "mc": [
      "60",
      "90",
      "120",
      "150"
    ],
    "dmg": [
      "70",
      "130",
      "190",
      "250"
    ]
  },
  "life_stealer_infest": {
    "dname": "Infest",
    "img": "/apps/dota2/images/dota_react/abilities/life_stealer_infest.png",
    "desc": "Lifestealer infests the body of a target unit, becoming undetectable, and healing for a portion of his max hitpoints every second while inside. He can then explode from the host body, dealing damage to nearby enemies. If the infested unit is an enemy creep or a neutral creep, he can take control of the unit's ability to move and attack, and the creep loses a portion of their max hitpoints over time. Does not work on enemy heroes.\n\nDISPEL TYPE: Basic Dispel",
    "behavior": "Unit Target",
    "dmg_type": "Magical",
    "bkbpierce": "Yes",
    "cd": [
      "80",
      "65",
      "50"
    ],
    "mc": [
      "100",
      "125",
      "150"
    ],
    "dmg": [
      "150",
      "275",
      "400"
    ]
  },
  "shadow_demon_shadow_poison": {
    "dname": "Shadow Poison",
    "img": "/apps/dota2/images/dota_react/abilities/shadow_demon_shadow_poison.png",
    "desc": "Deals damage in a line, and afflicts enemy units with a poison effect. The poison deals 1/2/4/8/16 times the stack damage based on the number of stacks on the target, up to 5 stacks. Additional stacks cause 50 damage each. This deferred damage is dealt when Shadow Poison's duration is expired, or the Release sub-ability is used.",
    "behavior": [
      "AOE",
      "Point Target"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": "2.5",
    "mc": "45"
  },
  "dragon_knight_elder_dragon_form": {
    "dname": "Elder Dragon Form",
    "img": "/apps/dota2/images/dota_react/abilities/dragon_knight_elder_dragon_form.png",
    "desc": "Dragon Knight takes the form of one of three powerful elder dragons. Increases movement speed, attack damage, and Wyrm's Wrath effects. Attacks apply Wyrm's Wrath on-hit effects and a percentage of the attack damage to all enemies near the target. Increases Dragon Tail range. Increases health regeneration and armor bonuses from Dragon Blood.",
    "behavior": "No Target",
    "dmg_type": "Physical",
    "cd": "100",
    "mc": "50"
  },
  "enchantress_rabblerouser": {
    "dname": "Rabble-Rouser",
    "img": "/apps/dota2/images/dota_react/abilities/enchantress_rabblerouser.png",
    "desc": "All neutral camps and Creeps under Enchantress' control deal more damage to enemy heroes.",
    "behavior": [
      "Passive",
      "Hidden"
    ],
    "bkbpierce": "Yes"
  },
  "slardar_slithereen_crush": {
    "dname": "Slithereen Crush",
    "img": "/apps/dota2/images/dota_react/abilities/slardar_slithereen_crush.png",
    "desc": "Slams the ground, leaving a puddle of water, and stunning and damaging nearby enemy units. After the stun, the affected units are slowed.",
    "behavior": "No Target",
    "dmg_type": "Physical",
    "bkbpierce": "No",
    "cd": "7",
    "mc": "100",
    "dmg": [
      "75",
      "150",
      "225",
      "300"
    ]
  },
  "clinkz_death_pact": {
    "dname": "Death Pact",
    "img": "/apps/dota2/images/dota_react/abilities/clinkz_death_pact.png",
    "desc": "Clinkz consumes the target enemy creep or friendly Skeleton Archer, healing and gaining max health. Does not take Clinkz out of Skeleton Walk.",
    "behavior": "Unit Target",
    "cd": "0",
    "mc": "60"
  },
  "life_stealer_consume": {
    "dname": "Consume",
    "img": "/apps/dota2/images/dota_react/abilities/life_stealer_consume.png",
    "desc": "Lifestealer eats the host body from the inside out, exploding from within.",
    "behavior": [
      "Hidden",
      "No Target",
      "Instant Cast"
    ]
  },
  "disruptor_glimpse": {
    "dname": "Glimpse",
    "img": "/apps/dota2/images/dota_react/abilities/disruptor_glimpse.png",
    "desc": "Teleports the target hero back to where it was 4 seconds ago. Instantly kills illusions. Deals damage equal to a percentage of the distance glimpsed, that cannot go over a damage maximum.",
    "behavior": "Unit Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "24",
      "22",
      "20",
      "18"
    ],
    "mc": [
      "70",
      "85",
      "100",
      "115"
    ]
  },
  "treant_living_armor": {
    "dname": "Living Armor",
    "img": "/apps/dota2/images/dota_react/abilities/treant_living_armor.png",
    "desc": "Infuses the target hero or structure with a protective coating which heals the target and blocks damage from player-controlled sources. Each time this spell blocks damage, the block amount is decreased. If the damage block is decreased to 0, the buff is removed early.",
    "behavior": [
      "Unit Target",
      "Point Target"
    ],
    "bkbpierce": "Yes",
    "cd": [
      "30",
      "25",
      "20",
      "15"
    ],
    "mc": [
      "40",
      "45",
      "50",
      "55"
    ]
  },
  "leshrac_pulse_nova": {
    "dname": "Pulse Nova",
    "img": "/apps/dota2/images/dota_react/abilities/leshrac_pulse_nova.png",
    "desc": "Creates waves of damaging energy around Leshrac, one per second, to damage nearby enemy units. Drains Leshrac's mana with each pulse.",
    "behavior": "No Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": "1",
    "mc": [
      "50",
      "60",
      "70"
    ],
    "dmg": [
      "80",
      "135",
      "180"
    ]
  },
  "omniknight_martyr": {
    "dname": "Repel",
    "img": "/apps/dota2/images/dota_react/abilities/omniknight_martyr.png",
    "desc": "Grants Debuff Immunity with 60% magic resistance to the target, as well as bonus Strength and HP Regen based on the amount of Debuffs on them.",
    "behavior": "Unit Target",
    "bkbpierce": "Yes",
    "cd": [
      "50",
      "45",
      "40",
      "35"
    ],
    "mc": [
      "90",
      "105",
      "120",
      "135"
    ]
  },
  "tiny_toss": {
    "dname": "Toss",
    "img": "/apps/dota2/images/dota_react/abilities/tiny_toss.png",
    "desc": "Grabs the nearest unit in a 300 radius around Tiny, ally or enemy, and launches it at the target unit or rune to deal damage where they land.",
    "behavior": [
      "Unit Target",
      "AOE"
    ],
    "dmg_type": "Magical",
    "cd": [
      "20",
      "17",
      "14",
      "11"
    ],
    "mc": [
      "110",
      "125",
      "140",
      "155"
    ],
    "dmg": [
      "90",
      "180",
      "270",
      "360"
    ]
  },
  "zuus_lightning_bolt": {
    "dname": "Lightning Bolt",
    "img": "/apps/dota2/images/dota_react/abilities/zuus_lightning_bolt.png",
    "desc": "Calls down a bolt of lightning to strike an enemy unit, causing damage and a mini-stun. When cast, Lightning Bolt briefly provides unobstructed vision and True Sight around the target in a 500 radius. Can be cast on the ground, affecting the closest enemy hero in 325 range.",
    "behavior": [
      "Unit Target",
      "Point Target"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": "6",
    "mc": [
      "120",
      "125",
      "130",
      "135"
    ],
    "dmg": [
      "140",
      "220",
      "300",
      "380"
    ]
  },
  "lone_druid_spirit_bear": {
    "dname": "Summon Spirit Bear",
    "img": "/apps/dota2/images/dota_react/abilities/lone_druid_spirit_bear.png",
    "desc": "Summons a powerful Spirit Bear companion that can equip items.\n\nIf the bear moves 1100 distance away from the Lone Druid, it cannot attack. Lone Druid suffers 20% of his max health as backlash damage if the Spirit Bear dies.\nSpirit Bear has Demolish, Return, Entangling Claws, Savage Roar, and Spirit Link abilities.",
    "behavior": "No Target",
    "cd": "120",
    "mc": "75"
  },
  "bristleback_quill_spray": {
    "dname": "Quill Spray",
    "img": "/apps/dota2/images/dota_react/abilities/bristleback_quill_spray.png",
    "desc": "Sprays enemy units with quills dealing damage in an area of effect around Bristleback. Deals bonus damage for every time a unit was hit by Quill Spray in the last 14 seconds.",
    "behavior": [
      "No Target",
      "Instant Cast",
      "Autocast"
    ],
    "dmg_type": "Physical",
    "bkbpierce": "Yes",
    "cd": "3",
    "mc": "35"
  },
  "bane_brain_sap": {
    "dname": "Brain Sap",
    "img": "/apps/dota2/images/dota_react/abilities/bane_brain_sap.png",
    "desc": "Feasts on the vital energies of an enemy unit, healing Bane and dealing damage.",
    "behavior": "Unit Target",
    "dmg_type": "Pure",
    "bkbpierce": "Yes",
    "cd": [
      "17",
      "15",
      "13",
      "11"
    ],
    "mc": [
      "120",
      "130",
      "140",
      "150"
    ]
  },
  "shadow_demon_disruption": {
    "dname": "Disruption",
    "img": "/apps/dota2/images/dota_react/abilities/shadow_demon_disruption.png",
    "desc": "Banishes the targeted unit from the battlefield for a short duration. Upon returning, two illusions of the banished unit with bonus base damage are created under Shadow Demon's control.",
    "behavior": "Unit Target",
    "bkbpierce": "No",
    "cd": [
      "26",
      "24",
      "22",
      "20"
    ],
    "mc": "120"
  },
  "night_stalker_darkness": {
    "dname": "Dark Ascension",
    "img": "/apps/dota2/images/dota_react/abilities/night_stalker_darkness.png",
    "desc": "Night Stalker smothers the sun and summons instant darkness, so that he might use his powers at their fullest. Night Stalker gains flight and bonus damage during this time. Has unobstructed vision.",
    "behavior": "No Target",
    "dmg_type": "Physical",
    "cd": [
      "140",
      "135",
      "130"
    ],
    "mc": [
      "125",
      "175",
      "225"
    ]
  },
  "furion_force_of_nature": {
    "dname": "Nature's Call",
    "img": "/apps/dota2/images/dota_react/abilities/furion_force_of_nature.png",
    "desc": "Converts an area of trees into Treants under the command of Nature's Prophet.",
    "behavior": [
      "Point Target",
      "AOE"
    ],
    "cd": [
      "45",
      "40",
      "35",
      "30"
    ],
    "mc": "100"
  },
  "spectre_shadow_step": {
    "dname": "Shadow Step",
    "img": "/apps/dota2/images/dota_react/abilities/spectre_shadow_step.png",
    "desc": "Thrusts an uncontrollable illusion at the target. The illusion receives 200% damage.\n\nThe Reality sub-ability may be used to teleport to the illusion, destroying it.",
    "behavior": [
      "Unit Target",
      "AOE"
    ],
    "bkbpierce": "Yes",
    "cd": [
      "32",
      "28",
      "24",
      "20"
    ],
    "mc": [
      "60",
      "65",
      "70",
      "75"
    ]
  },
  "shadow_demon_menace": {
    "dname": "Menace",
    "img": "/apps/dota2/images/dota_react/abilities/shadow_demon_menace.png",
    "desc": "Shadow Demon's Attacks apply a stacking 2.5% Amplify Damage debuff to the enemy for 8 seconds.",
    "behavior": "Passive"
  },
  "sniper_concussive_grenade": {
    "dname": "Concussive Grenade",
    "img": "/apps/dota2/images/dota_react/abilities/sniper_concussive_grenade.png",
    "desc": "Launches a grenade at the target area, dealing damage to enemies and knocking them and Sniper himself back. Enemies affected are disarmed and have their movement slowed after the knockback.",
    "behavior": [
      "Point Target",
      "AOE"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": "10",
    "mc": "50",
    "dmg": "200"
  },
  "lina_laguna_blade": {
    "dname": "Laguna Blade",
    "img": "/apps/dota2/images/dota_react/abilities/lina_laguna_blade.png",
    "desc": "Fires off a bolt of lightning at a single enemy unit, dealing massive damage.",
    "behavior": "Unit Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "70",
      "60",
      "50"
    ],
    "mc": [
      "150",
      "300",
      "450"
    ],
    "dmg": [
      "500",
      "750",
      "1000"
    ]
  },
  "muerta_dead_shot": {
    "dname": "Dead Shot",
    "img": "/apps/dota2/images/dota_react/abilities/muerta_dead_shot.png",
    "behavior": "Unit Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "16",
      "14",
      "12",
      "10"
    ],
    "mc": [
      "100",
      "120",
      "140",
      "160"
    ],
    "dmg": [
      "100",
      "175",
      "250",
      "325"
    ]
  },
  "ursa_fury_swipes": {
    "dname": "Fury Swipes",
    "img": "/apps/dota2/images/dota_react/abilities/ursa_fury_swipes.png",
    "desc": "Ursa's claws dig deeper wounds in the enemy, causing consecutive attacks to the same enemy to deal more damage. If the same target is not attacked after 8 seconds, the bonus damage is lost.",
    "behavior": "Passive",
    "dmg_type": "Physical",
    "bkbpierce": "Yes"
  },
  "terrorblade_conjure_image": {
    "dname": "Conjure Image",
    "img": "/apps/dota2/images/dota_react/abilities/terrorblade_conjure_image.png",
    "desc": "Creates an illusion of Terrorblade that deals damage.",
    "behavior": "No Target",
    "cd": "16",
    "mc": [
      "55",
      "65",
      "75",
      "85"
    ]
  },
  "shadow_shaman_voodoo": {
    "dname": "Hex",
    "img": "/apps/dota2/images/dota_react/abilities/shadow_shaman_voodoo.png",
    "desc": "Transforms an enemy unit into a harmless creature, disabling their attacks and abilities.",
    "behavior": "Unit Target",
    "bkbpierce": "No",
    "cd": [
      "24",
      "20",
      "16",
      "12"
    ],
    "mc": [
      "130",
      "150",
      "170",
      "190"
    ]
  },
  "ringmaster_empty_souvenir": {
    "dname": "Souvenir Slot",
    "img": "/apps/dota2/images/dota_react/abilities/ringmaster_empty_souvenir.png",
    "desc": "Gather souvenirs from kills and assists.",
    "behavior": "Passive"
  },
  "rubick_might_and_magus": {
    "dname": "Might and Magus",
    "img": "/apps/dota2/images/dota_react/abilities/rubick_might_and_magus.png",
    "desc": "Each 1% Spell Amplification also increases Rubick's attack damage by 0.75% and Magic Resistance by 0.75%.",
    "behavior": "Passive"
  },
  "undying_flesh_golem": {
    "dname": "Flesh Golem",
    "img": "/apps/dota2/images/dota_react/abilities/undying_flesh_golem.png",
    "desc": "Undying transforms into a horrifying flesh golem. Gains a percentage increase to strength and imbues attacks with a slow and damage amplification.",
    "behavior": [
      "No Target",
      "Instant Cast"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": "140",
    "mc": [
      "100",
      "125",
      "150"
    ]
  },
  "storm_spirit_overload": {
    "dname": "Overload",
    "img": "/apps/dota2/images/dota_react/abilities/storm_spirit_overload.png",
    "desc": "Casting a spell creates an electrical charge, which is released in a burst on Storm's next attack, dealing damage and slowing nearby enemies.",
    "behavior": "Passive",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "dmg": [
      "25",
      "50",
      "75",
      "100"
    ]
  },
  "abyssal_underlord_dark_portal": {
    "dname": "Fiend's Gate",
    "img": "/apps/dota2/images/dota_react/abilities/abyssal_underlord_dark_portal.png",
    "desc": "Opens 2 portals, one next to Underlord and one in the target location. Heroes can channel a portal for 3.5 seconds to teleport to the other side. Portals have to be at least 1500 away from each other.\n\nDouble-click to teleport to your team's base, in front of your fountain.",
    "behavior": "Point Target",
    "cd": [
      "110",
      "105",
      "100"
    ],
    "mc": "175"
  },
  "rubick_spell_steal": {
    "dname": "Spell Steal",
    "img": "/apps/dota2/images/dota_react/abilities/rubick_spell_steal.png",
    "desc": "Rubick studies the trace magical essence of one enemy hero, learning the secrets of the last spell the hero cast. Rubick can use this spell as his own for several minutes or until he dies, and stolen spells last longer on enemies.",
    "behavior": "Unit Target",
    "bkbpierce": "Yes",
    "cd": [
      "16",
      "10",
      "4"
    ],
    "mc": "25"
  },
  "slardar_amplify_damage": {
    "dname": "Corrosive Haze",
    "img": "/apps/dota2/images/dota_react/abilities/slardar_amplify_damage.png",
    "desc": "Reduces enemy armor to amplify physical damage and provides True Sight and vision of the targeted unit, revealing invisibility. The enemy unit leaves a trail of water behind it.",
    "behavior": "Unit Target",
    "bkbpierce": "Yes",
    "cd": "5",
    "mc": "25"
  },
  "wisp_tether": {
    "dname": "Tether",
    "img": "/apps/dota2/images/dota_react/abilities/wisp_tether.png",
    "desc": "Tethers Io to an allied unit, granting bonus movement speed to both. When Io restores health or mana, the tethered unit gains a portion of that amount. The tether breaks when the allied unit moves too far away, or Io cancels the tether. Tether slows enemies touching it.",
    "behavior": "Unit Target",
    "bkbpierce": "Yes",
    "cd": "12",
    "mc": "40"
  },
  "troll_warlord_berserkers_rage": {
    "dname": "Berserker's Rage",
    "img": "/apps/dota2/images/dota_react/abilities/troll_warlord_berserkers_rage.png",
    "desc": "While in melee form, Troll Warlord's attacks have a chance to ensnare, preventing the target from moving or using mobility spells and has additional movement speed and armor.\n\nWhen in ranged form, Troll Warlord's attacks have a chance to Maim the target, dealing bonus damage, and slowing the target's movement and attack speed.",
    "behavior": "Passive",
    "dmg_type": "Physical",
    "bkbpierce": "Yes"
  },
  "tinker_keen_teleport": {
    "dname": "Keen Conveyance",
    "img": "/apps/dota2/images/dota_react/abilities/tinker_keen_teleport.png",
    "desc": "CHANNELED - Teleport to a target friendly structure. Level 2 allows teleporting to friendly units and Level 3 to friendly heroes.",
    "behavior": [
      "Point Target",
      "Channeled"
    ],
    "cd": "50",
    "mc": "75"
  },
  "doom_bringer_empty2": {
    "dname": "Devoured Ability",
    "img": "/apps/dota2/images/dota_react/abilities/doom_bringer_empty2.png",
    "desc": "This slot will be replaced with abilities acquired using Devour.",
    "behavior": "Passive"
  },
  "venomancer_sepsis": {
    "dname": "Septic Shock",
    "img": "/apps/dota2/images/dota_react/abilities/venomancer_sepsis.png",
    "desc": "Venomancer's attacks deal extra damage based on how many debuffs the attack target has. Extra damage is dealt as magical damage. Only counts debuffs from Venomancer or his Plague Wards.",
    "behavior": "Passive",
    "dmg_type": "Magical",
    "bkbpierce": "No"
  },
  "slark_essence_shift": {
    "dname": "Essence Shift",
    "img": "/apps/dota2/images/dota_react/abilities/slark_essence_shift.png",
    "desc": "Slark steals the life essence of enemy heroes with his attacks, draining 1 of each of their attributes and converting them to bonus 3 Agility. If Slark kills an affected enemy hero, he permanently steals 1 Agility.",
    "behavior": [
      "Passive",
      "Hidden"
    ],
    "bkbpierce": "Yes"
  },
  "drow_ranger_trueshot": {
    "dname": "Precision Aura",
    "img": "/apps/dota2/images/dota_react/abilities/drow_ranger_trueshot.png",
    "desc": "Grants Drow bonus agility based on Drow's current agility and level. Nearby ranged heroes received 50% of the bonus agility.",
    "behavior": "Passive"
  },
  "zuus_cloud": {
    "dname": "Nimbus",
    "img": "/apps/dota2/images/dota_react/abilities/zuus_cloud.png",
    "desc": "Creates a storm cloud anywhere on the map that automatically casts Lightning Bolt on nearby enemies.",
    "behavior": [
      "Point Target",
      "AOE",
      "Hidden"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": "45",
    "mc": "275"
  },
  "legion_commander_overwhelming_odds": {
    "dname": "Overwhelming Odds",
    "img": "/apps/dota2/images/dota_react/abilities/legion_commander_overwhelming_odds.png",
    "desc": "Turns the foes' numbers against them, dealing damage to all enemies in the area. Damage increases with each enemy unit or hero in the area. Also grants bonus Attack Speed to Legion Commander. Can be cast during Duel.",
    "behavior": [
      "AOE",
      "No Target"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": "18",
    "mc": [
      "90",
      "105",
      "120",
      "135"
    ]
  },
  "spirit_breaker_planar_pocket": {
    "dname": "Planar Pocket",
    "img": "/apps/dota2/images/dota_react/abilities/spirit_breaker_planar_pocket.png",
    "desc": "Barathrum gains magic resistance and distorts reality around the selected hero, making any unit-targeted spells cast by enemy heroes get redirected towards Spirit Breaker. Can be cast on both allied and enemy heroes, but only spells cast by enemies of Spirit Breaker will be redirected.",
    "behavior": "Unit Target",
    "bkbpierce": "No",
    "cd": "25",
    "mc": "100"
  },
  "tinker_laser": {
    "dname": "Laser",
    "img": "/apps/dota2/images/dota_react/abilities/tinker_laser.png",
    "desc": "Fires an intense energy beam, damaging and blinding the target. Blinded targets miss all physical attacks.",
    "behavior": "Unit Target",
    "dmg_type": "Pure",
    "bkbpierce": "No",
    "cd": [
      "19",
      "18",
      "17",
      "16"
    ],
    "mc": [
      "95",
      "105",
      "115",
      "125"
    ]
  },
  "doom_bringer_doom": {
    "dname": "Doom",
    "img": "/apps/dota2/images/dota_react/abilities/doom_bringer_doom.png",
    "desc": "Inflicts a curse that dispels an enemy and prevents them from casting spells or healing in any way, while taking damage over time.\n\nDISPEL TYPE: Basic Dispel",
    "behavior": "Unit Target",
    "dmg_type": "Pure",
    "bkbpierce": "Yes",
    "cd": [
      "140",
      "130",
      "120"
    ],
    "mc": [
      "150",
      "200",
      "250"
    ]
  },
  "beastmaster_wild_axes": {
    "dname": "Wild Axes",
    "img": "/apps/dota2/images/dota_react/abilities/beastmaster_wild_axes.png",
    "desc": "Beastmaster sends his axes flying and calls them home again, slicing through enemy units and trees along their path. Each axe can hit an enemy once, and amplifies subsequent damage from Beastmaster and his units.",
    "behavior": "Point Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": "8",
    "mc": [
      "50",
      "55",
      "60",
      "65"
    ]
  },
  "dawnbreaker_break_of_dawn": {
    "dname": "Break of Dawn",
    "img": "/apps/dota2/images/dota_react/abilities/dawnbreaker_break_of_dawn.png",
    "desc": "Whenever the sun comes out, Dawnbreaker gains bonus base damage and vision that decreases throughout the course of the day.",
    "behavior": "Passive"
  },
  "juggernaut_swift_slash": {
    "dname": "Swiftslash",
    "img": "/apps/dota2/images/dota_react/abilities/juggernaut_swift_slash.png",
    "desc": "Performs a short Omnislash for 1 seconds.",
    "behavior": "Unit Target",
    "dmg_type": "Physical",
    "bkbpierce": "Yes",
    "cd": "25",
    "mc": "150"
  },
  "skywrath_mage_ruin_and_restoration": {
    "dname": "Ruin and Restoration",
    "img": "/apps/dota2/images/dota_react/abilities/skywrath_mage_ruin_and_restoration.png",
    "desc": "Skywrath Mage has 25% Spell Lifesteal.",
    "behavior": "Passive"
  },
  "magnataur_empower": {
    "dname": "Empower",
    "img": "/apps/dota2/images/dota_react/abilities/magnataur_empower.png",
    "desc": "Gives an allied unit bonus damage and cleave on attack. Magnus receives 30% larger bonus.",
    "behavior": "Unit Target",
    "bkbpierce": "Yes",
    "cd": "8",
    "mc": [
      "45",
      "55",
      "65",
      "75"
    ]
  },
  "sven_storm_bolt": {
    "dname": "Storm Hammer",
    "img": "/apps/dota2/images/dota_react/abilities/sven_storm_bolt.png",
    "desc": "Sven unleashes his magical gauntlet that deals damage and stuns enemy units in a small area around the target.",
    "behavior": [
      "Unit Target",
      "AOE"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "21",
      "18",
      "15",
      "12"
    ],
    "mc": [
      "110",
      "115",
      "120",
      "125"
    ],
    "dmg": [
      "80",
      "160",
      "240",
      "320"
    ]
  },
  "jakiro_double_trouble": {
    "dname": "Double Trouble",
    "img": "/apps/dota2/images/dota_react/abilities/jakiro_double_trouble.png",
    "desc": "Jakiro's attacks launch an attack from each head, but deal less damage each.",
    "behavior": "Passive"
  },
  "wisp_relocate": {
    "dname": "Relocate",
    "img": "/apps/dota2/images/dota_react/abilities/wisp_relocate.png",
    "desc": "Teleports Io and a tethered ally to any location. After the spell expires, Io and the tethered ally will return to their original location. Double-click to teleport to your team's base fountain.",
    "behavior": "Point Target",
    "cd": [
      "90",
      "80",
      "70"
    ],
    "mc": "175"
  },
  "enchantress_bunny_hop": {
    "dname": "Sproink",
    "img": "/apps/dota2/images/dota_react/abilities/enchantress_bunny_hop.png",
    "desc": "Leaps backward, dodges incoming projectiles, and launches an Impetus attack on the 2 furthest enemy units within Enchantress' attack range + 100.",
    "behavior": [
      "No Target",
      "Instant Cast",
      "Hidden"
    ],
    "bkbpierce": "No",
    "cd": "10",
    "mc": "60"
  },
  "abyssal_underlord_raid_boss": {
    "dname": "Invading Force",
    "img": "/apps/dota2/images/dota_react/abilities/abyssal_underlord_raid_boss.png",
    "desc": "After an allied hero Teleports, they temporarily gain Damage Reduction and Movement Speed. Allies receive 2x bonuses if teleporting via Fiend's Gate.",
    "behavior": [
      "Passive",
      "Hidden"
    ]
  },
  "invoker_ghost_walk": {
    "dname": "Ghost Walk",
    "img": "/apps/dota2/images/dota_react/abilities/invoker_ghost_walk.png",
    "desc": "Invoker manipulates the ice and electrical energies around him, rendering his body invisible and gaining health and mana regen. The elemental imbalance created as a consequence slows nearby enemies based on the level of Quas, and slows Invoker as well based on the level of Wex.",
    "behavior": [
      "No Target",
      "Instant Cast",
      "Hidden"
    ],
    "bkbpierce": "No",
    "cd": "32",
    "mc": "175"
  },
  "troll_warlord_switch_stance": {
    "dname": "Battle Stance",
    "img": "/apps/dota2/images/dota_react/abilities/troll_warlord_switch_stance.png",
    "desc": "Troll Warlord swaps from using ranged to melee attacks. Melee attacks have decreased base attack time.",
    "behavior": [
      "No Target",
      "Instant Cast"
    ],
    "bkbpierce": "Yes"
  },
  "weaver_rewoven": {
    "dname": "Rewoven",
    "img": "/apps/dota2/images/dota_react/abilities/weaver_rewoven.png",
    "desc": "Every time Weaver casts an ability, he gains 50 attack range for 7s. This effect stacks independently.",
    "behavior": [
      "Passive",
      "Hidden"
    ]
  },
  "winter_wyvern_winters_curse": {
    "dname": "Winter's Curse",
    "img": "/apps/dota2/images/dota_react/abilities/winter_wyvern_winters_curse.png",
    "desc": "Winter Wyvern dispells then freezes an enemy in place while striking those nearby with a maddening curse which causes them to attack their frozen ally with increased attack speed. The frozen ally and those cursed to attack their ally are immune to all damage from their enemies with the exception of damage from Winter Wyvern or her controlled units.",
    "behavior": [
      "Unit Target",
      "AOE"
    ],
    "bkbpierce": "Yes",
    "cd": [
      "100",
      "90",
      "80"
    ],
    "mc": [
      "150",
      "200",
      "250"
    ]
  },
  "largo_song_good_vibrations": {
    "dname": "Island Elixir",
    "img": "/apps/dota2/images/dota_react/abilities/largo_song_good_vibrations.png",
    "desc": "Largo plays a song that heals nearby friendly heroes.",
    "behavior": [
      "No Target",
      "Instant Cast",
      "Hidden"
    ],
    "cd": "0.2",
    "mc": [
      "20",
      "32",
      "44"
    ]
  },
  "death_prophet_silence": {
    "dname": "Silence",
    "img": "/apps/dota2/images/dota_react/abilities/death_prophet_silence.png",
    "desc": "Fires a projectile that prevents enemy units in a target area from casting spells.",
    "behavior": [
      "AOE",
      "Point Target"
    ],
    "bkbpierce": "No",
    "cd": [
      "15",
      "14",
      "13",
      "12"
    ],
    "mc": [
      "80",
      "90",
      "100",
      "110"
    ]
  },
  "ancient_apparition_ice_blast_release": {
    "dname": "Release",
    "img": "/apps/dota2/images/dota_react/abilities/ancient_apparition_ice_blast_release.png",
    "desc": "Releases the ice blast to explode at the tracer's current location. Can be cast while silenced.",
    "behavior": [
      "Hidden",
      "No Target"
    ],
    "cd": "1"
  },
  "nyx_assassin_jolt": {
    "dname": "Mind Flare",
    "img": "/apps/dota2/images/dota_react/abilities/nyx_assassin_jolt.png",
    "desc": "Deals damages to the enemy equal to a percentage of its Max Mana. Deals additional damage equal to a percentage of the damage the target has taken from Nyx Assassin in the last 15s. Resets accumulated damage before applying damage.",
    "behavior": [
      "Unit Target",
      "AOE"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "11",
      "9.5",
      "8",
      "6.5"
    ],
    "mc": [
      "100",
      "105",
      "110",
      "115"
    ]
  },
  "ogre_magi_multicast": {
    "dname": "Multicast",
    "img": "/apps/dota2/images/dota_react/abilities/ogre_magi_multicast.png",
    "desc": "Enables Ogre Magi to cast his abilities and items multiple times with each use.",
    "behavior": "Passive"
  },
  "invoker_wex": {
    "dname": "Wex",
    "img": "/apps/dota2/images/dota_react/abilities/invoker_wex.png",
    "desc": "Allows manipulation of storm elements. Active Wex instances imbue Invoker with bonus movement and attack speed. Passively grants bonus agility per level of Wex.",
    "behavior": [
      "No Target",
      "Instant Cast"
    ],
    "cd": "0",
    "mc": "0"
  },
  "luna_lucent_beam": {
    "dname": "Lucent Beam",
    "img": "/apps/dota2/images/dota_react/abilities/luna_lucent_beam.png",
    "desc": "Calls a beam of lunar energy down upon an enemy, damaging and briefly stunning them.",
    "behavior": "Unit Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "9",
      "8",
      "7",
      "6"
    ],
    "mc": [
      "90",
      "100",
      "110",
      "120"
    ]
  },
  "crystal_maiden_crystal_nova": {
    "dname": "Crystal Nova",
    "img": "/apps/dota2/images/dota_react/abilities/crystal_maiden_crystal_nova.png",
    "desc": "A burst of damaging frost slows enemy movement in the targeted area.",
    "behavior": [
      "Point Target",
      "AOE"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "11",
      "10",
      "9",
      "8"
    ],
    "mc": [
      "115",
      "135",
      "155",
      "175"
    ],
    "dmg": [
      "110",
      "160",
      "210",
      "260"
    ]
  },
  "furion_spirit_of_the_forest": {
    "dname": "Spirit of the Forest",
    "img": "/apps/dota2/images/dota_react/abilities/furion_spirit_of_the_forest.png",
    "desc": "Nature's Prophet gains 2% bonus damage for each tree within 300 and a multiplier of that same bonus for each treant within 1200 distance of him.",
    "behavior": [
      "Passive",
      "Hidden"
    ]
  },
  "lone_druid_savage_roar": {
    "dname": "Savage Roar",
    "img": "/apps/dota2/images/dota_react/abilities/lone_druid_savage_roar.png",
    "desc": "Lone Druid and the Spirit Bear roar fiercely causing nearby enemies to flee towards their base in terror. Their movement speed is increased by 20%.",
    "behavior": "No Target",
    "bkbpierce": "No",
    "cd": [
      "38",
      "32",
      "26",
      "20"
    ],
    "mc": "50"
  },
  "naga_siren_song_of_the_siren": {
    "dname": "Song of the Siren",
    "img": "/apps/dota2/images/dota_react/abilities/naga_siren_song_of_the_siren.png",
    "desc": "All enemies in range of the Naga Siren are put into a magical stasis where they cannot act or be attacked. Allies in range recover a percentage of their health per second. Using Song of the Siren again will end the duration early.",
    "behavior": "No Target",
    "bkbpierce": "No",
    "cd": [
      "160",
      "130",
      "100"
    ],
    "mc": [
      "150",
      "250",
      "350"
    ]
  },
  "hoodwink_acorn_shot": {
    "dname": "Acorn Shot",
    "img": "/apps/dota2/images/dota_react/abilities/hoodwink_acorn_shot.png",
    "desc": "Fires Hoodwink's attack with an acorn at the target unit. The acorn bounces to nearby targets, slowing them and dealing a percentage of Hoodwink's attack with bonus damage.\nIf point targeted, a tree is created at the target position and the acorn will bounce to nearby targets. The ability may be placed on alt-cast to force this behavior.",
    "behavior": [
      "Unit Target",
      "Point Target"
    ],
    "dmg_type": "Physical",
    "bkbpierce": "No",
    "cd": [
      "16",
      "14",
      "12",
      "10"
    ],
    "mc": [
      "70",
      "80",
      "90",
      "100"
    ]
  },
  "shadow_demon_demonic_purge": {
    "dname": "Demonic Purge",
    "img": "/apps/dota2/images/dota_react/abilities/shadow_demon_demonic_purge.png",
    "desc": "Purges the target enemy unit, removing positive buffs, and slowing the target for the duration. The unit slowly regains its speed until the end of the duration, upon which damage is dealt. Units under the effect of Disruption can still be affected by Demonic Purge.\n\nDISPEL TYPE: Basic Dispel",
    "behavior": "Unit Target",
    "dmg_type": "Magical",
    "bkbpierce": "Yes",
    "cd": [
      "70",
      "65",
      "60"
    ],
    "mc": [
      "150",
      "175",
      "200"
    ]
  },
  "skywrath_mage_concussive_shot": {
    "dname": "Concussive Shot",
    "img": "/apps/dota2/images/dota_react/abilities/skywrath_mage_concussive_shot.png",
    "desc": "Skywrath Mage sets off a long range shot that hits the closest hero within a long range. Upon impact, it deals damage and slows in an area of effect.",
    "behavior": "No Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "15",
      "14",
      "13",
      "12"
    ],
    "mc": [
      "80",
      "85",
      "90",
      "95"
    ],
    "dmg": [
      "120",
      "180",
      "240",
      "300"
    ]
  },
  "nyx_assassin_vendetta": {
    "dname": "Vendetta",
    "img": "/apps/dota2/images/dota_react/abilities/nyx_assassin_vendetta.png",
    "desc": "Allows Nyx Assassin to become invisible and gain a speed bonus. If Nyx Assassin attacks to break the invisibility, massive bonus damage is dealt with the attack. Nyx Assassin has 75 additional attack range and a 70% faster attack animation for this attack.",
    "behavior": [
      "Instant Cast",
      "No Target"
    ],
    "dmg_type": "Pure",
    "bkbpierce": "Yes",
    "cd": [
      "80",
      "70",
      "60"
    ],
    "mc": [
      "180",
      "240",
      "300"
    ]
  },
  "bristleback_prickly": {
    "dname": "Prickly",
    "img": "/apps/dota2/images/dota_react/abilities/bristleback_prickly.png",
    "desc": "Bristleback has 10% damage and debuff duration amp against enemy heroes that are behind him.",
    "behavior": "Passive",
    "dmg_type": "Physical",
    "bkbpierce": "No"
  },
  "death_prophet_exorcism": {
    "dname": "Exorcism",
    "img": "/apps/dota2/images/dota_react/abilities/death_prophet_exorcism.png",
    "desc": "Unleashes evil spirits to drain the life of nearby enemy units and structures. Spirits need to return back to Death Prophet in order to attack again. At the end of the spell's duration, Death Prophet is healed in proportion to the damage dealt. Deals 50% damage to buildings. Lasts 40 seconds.",
    "behavior": "No Target",
    "dmg_type": "Physical",
    "bkbpierce": "Yes",
    "cd": "150",
    "mc": [
      "200",
      "300",
      "400"
    ]
  },
  "pugna_oblivion_savant": {
    "dname": "Oblivion Savant",
    "img": "/apps/dota2/images/dota_react/abilities/pugna_oblivion_savant.png",
    "desc": "Pugna can cast spells and use items while channeling.",
    "behavior": "Passive"
  },
  "elder_titan_natural_order": {
    "dname": "Natural Order",
    "img": "/apps/dota2/images/dota_react/abilities/elder_titan_natural_order.png",
    "desc": "Reduces all elements to their basic levels, removing base armor and magic damage resistance from nearby enemy units. The armor reduction is centered around the hero, while the magic armor reduction is centered around Astral Spirit.",
    "behavior": "Passive",
    "bkbpierce": "No"
  },
  "techies_reactive_tazer_stop": {
    "dname": "Detonate Tazer",
    "img": "/apps/dota2/images/dota_react/abilities/techies_reactive_tazer_stop.png",
    "desc": "Detonate Reactive Tazer immediately.",
    "behavior": [
      "No Target",
      "Hidden",
      "Instant Cast"
    ],
    "cd": "0.5"
  },
  "slardar_seaborn_sentinel": {
    "dname": "Seaborn Sentinel",
    "img": "/apps/dota2/images/dota_react/abilities/slardar_seaborn_sentinel.png",
    "desc": "Slardar gains bonus movement speed, health regeneration, attack damage, and armor while in a puddle, trail, or river.",
    "behavior": "Passive"
  },
  "primal_beast_trample": {
    "dname": "Trample",
    "img": "/apps/dota2/images/dota_react/abilities/primal_beast_trample.png",
    "desc": "Primal Beast stomps over everything. For every 140 units traveled, all enemies around the Beast receive damage. Deals base damage plus a multiplier of Primal Beast's attack damage. Primal Beast is disarmed for the duration of the ability.",
    "behavior": [
      "No Target",
      "Instant Cast"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "30",
      "27",
      "24",
      "21"
    ],
    "mc": "100"
  },
  "troll_warlord_whirling_axes_melee": {
    "dname": "Whirling Axes (Melee)",
    "img": "/apps/dota2/images/dota_react/abilities/troll_warlord_whirling_axes_melee.png",
    "desc": "Troll hurls two axes around him in a close range area of effect, damaging enemy units and causing them to miss some attacks.",
    "behavior": [
      "No Target",
      "Instant Cast"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": "9",
    "dmg": [
      "50",
      "100",
      "150",
      "200"
    ]
  },
  "clinkz_wind_walk": {
    "dname": "Skeleton Walk",
    "img": "/apps/dota2/images/dota_react/abilities/clinkz_wind_walk.png",
    "desc": "Clinkz moves invisibly through units until the moment he attacks or uses items. Leaving Skeleton Walk creates Skeleton Archers.\n\nSkeleton Archers are immobile and die within multiple attacks from a hero or tower. Skeleton Archers deal a percentage of Clinkz' damage, and deal 25% less damage to buildings. Attack range is equal to Clinkz' attack range.",
    "behavior": [
      "No Target",
      "Instant Cast"
    ],
    "cd": [
      "24",
      "21",
      "18"
    ],
    "mc": [
      "80",
      "105",
      "130"
    ]
  },
  "broodmother_spawn_spiderlings": {
    "dname": "Spawn Spiderlings",
    "img": "/apps/dota2/images/dota_react/abilities/broodmother_spawn_spiderlings.png",
    "desc": "Broodmother injects her young into an enemy unit, dealing damage and slowing them for 4 seconds. The spiderlings will hatch if the target is killed while under this influence.",
    "behavior": "Unit Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "9",
      "8",
      "7"
    ],
    "mc": "100",
    "dmg": [
      "220",
      "320",
      "420"
    ]
  },
  "batrider_flaming_lasso": {
    "dname": "Flaming Lasso",
    "img": "/apps/dota2/images/dota_react/abilities/batrider_flaming_lasso.png",
    "desc": "Lassoes an enemy and drags them in Batrider's wake. Dragged units cannot move, attack, or use abilities. Teleporting or blinking will break the lasso.",
    "behavior": "Unit Target",
    "dmg_type": "Magical",
    "bkbpierce": "Yes",
    "cd": [
      "90",
      "75",
      "60"
    ],
    "mc": [
      "125",
      "150",
      "175"
    ]
  },
  "legion_commander_duel": {
    "dname": "Duel",
    "img": "/apps/dota2/images/dota_react/abilities/legion_commander_duel.png",
    "desc": "Legion Commander and the target enemy hero are forced to attack each other for a short duration. Neither hero can use items or abilities, with the exception of Legion Commander being able to cast Overwhelming Odds. If either hero dies during the duration, the hero winning the Duel gains permanent bonus damage.",
    "behavior": "Unit Target",
    "bkbpierce": "Yes",
    "cd": [
      "60",
      "55",
      "50"
    ],
    "mc": "75"
  },
  "vengefulspirit_command_aura": {
    "dname": "Vengeance Aura",
    "img": "/apps/dota2/images/dota_react/abilities/vengefulspirit_command_aura.png",
    "desc": "Vengeful Spirit's presence increases the damage of nearby friendly heroes.",
    "behavior": "Passive",
    "bkbpierce": "Yes"
  },
  "lion_voodoo": {
    "dname": "Hex",
    "img": "/apps/dota2/images/dota_react/abilities/lion_voodoo.png",
    "desc": "Transforms an enemy unit into a harmless beast, with all special abilities disabled.",
    "behavior": "Unit Target",
    "bkbpierce": "No",
    "cd": [
      "24",
      "20",
      "16",
      "12"
    ],
    "mc": [
      "110",
      "140",
      "170",
      "200"
    ]
  },
  "obsidian_destroyer_ominous_discernment": {
    "dname": "Ominous Discernment",
    "img": "/apps/dota2/images/dota_react/abilities/obsidian_destroyer_ominous_discernment.png",
    "desc": "Outworld Destroyer gains an additional 2.5 mana per point of Intelligence.",
    "behavior": "Passive"
  },
  "life_stealer_open_wounds": {
    "dname": "Open Wounds",
    "img": "/apps/dota2/images/dota_react/abilities/life_stealer_open_wounds.png",
    "desc": "Lifestealer rends an enemy unit, slowing the victim's movement speed and allowing all allies to regain health for a percentage of the damage they deal to that unit. The victim recovers movement speed over the duration.",
    "behavior": "Unit Target",
    "bkbpierce": "No",
    "cd": [
      "30",
      "25",
      "20",
      "15"
    ],
    "mc": "100"
  },
  "omniknight_guardian_angel": {
    "dname": "Guardian Angel",
    "img": "/apps/dota2/images/dota_react/abilities/omniknight_guardian_angel.png",
    "desc": "Omniknight calls upon a Guardian Angel that grants immunity from physical damage to allied units in an area.",
    "behavior": [
      "Point Target",
      "AOE"
    ],
    "bkbpierce": "Yes",
    "cd": [
      "100",
      "90",
      "80"
    ],
    "mc": [
      "125",
      "175",
      "225"
    ]
  },
  "tinker_defense_matrix": {
    "dname": "Defense Matrix",
    "img": "/apps/dota2/images/dota_react/abilities/tinker_defense_matrix.png",
    "desc": "Targets an allied unit, applying an all damage barrier to them that also provides Status Resistance.",
    "behavior": "Unit Target",
    "bkbpierce": "No",
    "cd": "20",
    "mc": [
      "90",
      "105",
      "120",
      "135"
    ]
  },
  "axe_berserkers_call": {
    "dname": "Berserker's Call",
    "img": "/apps/dota2/images/dota_react/abilities/axe_berserkers_call.png",
    "desc": "Axe taunts nearby enemy units, forcing them to attack him while he gains bonus armor during the duration.",
    "behavior": "No Target",
    "bkbpierce": "Yes",
    "cd": [
      "18",
      "16",
      "14",
      "12"
    ],
    "mc": [
      "90",
      "100",
      "110",
      "120"
    ],
    "dmg": "0"
  },
  "elder_titan_echo_stomp": {
    "dname": "Echo Stomp",
    "img": "/apps/dota2/images/dota_react/abilities/elder_titan_echo_stomp.png",
    "desc": "CHANNELED - Elder Titan and his Astral Spirit both stomp the ground, damaging and knocking nearby enemy units unconscious around their locations. The Elder Titan stomp deals physical damage, while the Spirit stomp deals magical damage.",
    "behavior": [
      "No Target",
      "Channeled"
    ],
    "dmg_type": "Physical",
    "bkbpierce": "No",
    "cd": [
      "14",
      "13",
      "12",
      "11"
    ],
    "mc": "100"
  },
  "bristleback_bristleback": {
    "dname": "Bristleback",
    "img": "/apps/dota2/images/dota_react/abilities/bristleback_bristleback.png",
    "desc": "Bristleback takes less damage if hit on the sides or rear. If Bristleback takes 275 damage from the rear, he releases a Quill Spray of the current level.",
    "behavior": "Passive"
  },
  "sniper_take_aim": {
    "dname": "Take Aim",
    "img": "/apps/dota2/images/dota_react/abilities/sniper_take_aim.png",
    "desc": "Increases vision range, Headshot chance, and attack range. Slows you by 65% for the duration and restricts your vision to a frontal cone.",
    "behavior": "No Target",
    "cd": [
      "20",
      "18",
      "16",
      "14"
    ],
    "mc": "50"
  },
  "lion_to_hell_and_back": {
    "dname": "To Hell and Back",
    "img": "/apps/dota2/images/dota_react/abilities/lion_to_hell_and_back.png",
    "desc": "Lion gains 20% debuff duration and 20% spell amplification for 90s after respawning.",
    "behavior": "Passive"
  },
  "furion_curse_of_the_forest": {
    "dname": "Curse of the Oldgrowth",
    "img": "/apps/dota2/images/dota_react/abilities/furion_curse_of_the_forest.png",
    "desc": "Applies a curse on all enemy heroes within 900 range, displaying them in fog, slowing them, and dealing damage over time based on the number of trees within 250 radius. Treants count as trees for this purpose.",
    "behavior": "No Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": "18",
    "mc": "80"
  },
  "luna_lunar_orbit": {
    "dname": "Lunar Orbit",
    "img": "/apps/dota2/images/dota_react/abilities/luna_lunar_orbit.png",
    "desc": "Creates 4 glaives that rotate 225 radius around Luna. Any enemy unit that collides with a glaive will take a percentage of Luna's Attack Damage.",
    "behavior": [
      "No Target",
      "Instant Cast"
    ],
    "dmg_type": "Physical",
    "bkbpierce": "Yes",
    "cd": [
      "40",
      "35",
      "30",
      "25"
    ],
    "mc": [
      "65",
      "70",
      "75",
      "80"
    ]
  },
  "bloodseeker_rupture": {
    "dname": "Rupture",
    "img": "/apps/dota2/images/dota_react/abilities/bloodseeker_rupture.png",
    "desc": "Causes an enemy unit's skin to rupture, dealing initial damage based on its current health. If the unit moves, it takes damage based on the distance moved.",
    "behavior": "Unit Target",
    "dmg_type": "Pure",
    "bkbpierce": "Yes",
    "cd": [
      "75",
      "70",
      "65"
    ],
    "mc": [
      "100",
      "150",
      "200"
    ]
  },
  "lich_frost_shield": {
    "dname": "Frost Shield",
    "img": "/apps/dota2/images/dota_react/abilities/lich_frost_shield.png",
    "desc": "Applies a magical frost shield around the target, reducing damage from attacks against it. While the shield is active, ice magic will affect nearby enemy units every 1 seconds, dealing minor damage and slowing them.",
    "behavior": "Unit Target",
    "dmg_type": "Magical",
    "cd": [
      "30",
      "25",
      "20",
      "15"
    ],
    "mc": [
      "100",
      "110",
      "120",
      "130"
    ],
    "dmg": [
      "18",
      "32",
      "46",
      "60"
    ]
  },
  "drow_ranger_wave_of_silence": {
    "dname": "Gust",
    "img": "/apps/dota2/images/dota_react/abilities/drow_ranger_wave_of_silence.png",
    "desc": "Releases a wave that silences and knocks back and reveals invisible enemy units. Knockback distance is relative to how close they are to Drow.",
    "behavior": "Point Target",
    "bkbpierce": "No",
    "cd": [
      "19",
      "17",
      "15",
      "13"
    ],
    "mc": "70"
  },
  "naga_siren_mirror_image": {
    "dname": "Mirror Image",
    "img": "/apps/dota2/images/dota_react/abilities/naga_siren_mirror_image.png",
    "desc": "Creates multiple images of Naga Siren under her control.\n\nDISPEL TYPE: Basic Dispel",
    "behavior": "No Target",
    "cd": [
      "40",
      "35",
      "30",
      "25"
    ],
    "mc": [
      "75",
      "90",
      "105",
      "120"
    ]
  },
  "crystal_maiden_frostbite": {
    "dname": "Frostbite",
    "img": "/apps/dota2/images/dota_react/abilities/crystal_maiden_frostbite.png",
    "desc": "Encases an enemy unit in ice, prohibiting movement and attack, while dealing damage over time. Deals 4x damage to non-ancient creeps.",
    "behavior": "Unit Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "9",
      "8",
      "7",
      "6"
    ],
    "mc": [
      "125",
      "135",
      "145",
      "155"
    ]
  },
  "lina_light_strike_array": {
    "dname": "Light Strike Array",
    "img": "/apps/dota2/images/dota_react/abilities/lina_light_strike_array.png",
    "desc": "Summons a column of flames that damages and stuns enemies.",
    "behavior": [
      "Point Target",
      "AOE"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "13",
      "11",
      "9",
      "7"
    ],
    "mc": [
      "100",
      "110",
      "120",
      "130"
    ],
    "dmg": [
      "110",
      "160",
      "210",
      "260"
    ]
  },
  "sniper_assassinate": {
    "dname": "Assassinate",
    "img": "/apps/dota2/images/dota_react/abilities/sniper_assassinate.png",
    "desc": "Sniper locks onto a target enemy unit and, after a short aiming duration, fires a devastating shot that delivers an amplified attack plus bonus damage at long range and mini-stuns the target. Whenever Sniper kills an enemy hero, Assassinate is refreshed.",
    "behavior": "Unit Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "20",
      "15",
      "10"
    ],
    "mc": "175"
  },
  "vengefulspirit_wave_of_terror": {
    "dname": "Wave of Terror",
    "img": "/apps/dota2/images/dota_react/abilities/vengefulspirit_wave_of_terror.png",
    "desc": "Vengeful Spirit lets loose a wicked cry, weakening the total attack damage and armor of enemies, and giving vision of the path ahead.",
    "behavior": "Point Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "16",
      "14",
      "12",
      "10"
    ],
    "mc": "40",
    "dmg": [
      "60",
      "80",
      "100",
      "120"
    ]
  },
  "void_spirit_aether_remnant": {
    "dname": "Aether Remnant",
    "img": "/apps/dota2/images/dota_react/abilities/void_spirit_aether_remnant.png",
    "desc": "Void Spirit dispatches a remnant to the target location. The remnant stands watch over the region, facing the direction of his vector. When a unit crosses its gaze, the remnant pulls it in and damages it.",
    "behavior": "Point Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "17",
      "15",
      "13",
      "11"
    ],
    "mc": [
      "75",
      "80",
      "85",
      "90"
    ],
    "dmg": [
      "90",
      "140",
      "190",
      "240"
    ]
  },
  "silencer_glaives_of_wisdom": {
    "dname": "Glaives of Wisdom",
    "img": "/apps/dota2/images/dota_react/abilities/silencer_glaives_of_wisdom.png",
    "desc": "Silencer enchants his glaives with his wisdom, stealing his target's Intelligence with each hit and dealing additional damage based on his Intelligence.",
    "behavior": [
      "Unit Target",
      "Autocast",
      "Attack Modifier"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": "0",
    "mc": [
      "14",
      "16",
      "18",
      "20",
      "20"
    ]
  },
  "grimstroke_return": {
    "dname": "Ink Explosion",
    "img": "/apps/dota2/images/dota_react/abilities/grimstroke_return.png",
    "desc": "Triggers an existing Ink Swell.",
    "behavior": [
      "Hidden",
      "No Target"
    ],
    "bkbpierce": "No",
    "cd": "1",
    "mc": "0"
  },
  "dark_seer_normal_punch": {
    "dname": "Normal Punch",
    "img": "/apps/dota2/images/dota_react/abilities/dark_seer_normal_punch.png",
    "desc": "Passive ability. Causes Dark Seer's next attack on a hero to have True Strike, knock a replica out of the victim, damaging and stunning them based on how far Dark Seer has moved in the past 3 seconds. Max power is reached after 1100 distance moved.",
    "behavior": [
      "Passive",
      "Hidden"
    ],
    "bkbpierce": "No",
    "cd": "10"
  },
  "largo_song_double_time": {
    "dname": "Hotfeet Hustle",
    "img": "/apps/dota2/images/dota_react/abilities/largo_song_double_time.png",
    "desc": "Largo plays a song that increases nearby friendly units' movement speed and grants a brief slow resistance.",
    "behavior": [
      "No Target",
      "Instant Cast",
      "Hidden"
    ],
    "cd": "0.2",
    "mc": [
      "20",
      "32",
      "44"
    ]
  },
  "shredder_exposure_therapy": {
    "dname": "Exposure Therapy",
    "img": "/apps/dota2/images/dota_react/abilities/shredder_exposure_therapy.png",
    "desc": "Whenever Timbersaw destroys a tree, he gains 4 mana.",
    "behavior": "Passive"
  },
  "silencer_global_silence": {
    "dname": "Global Silence",
    "img": "/apps/dota2/images/dota_react/abilities/silencer_global_silence.png",
    "desc": "Silencer stops all sound, preventing enemy heroes and units on the map from casting spells.",
    "behavior": "No Target",
    "bkbpierce": "Yes",
    "cd": "120",
    "mc": [
      "300",
      "450",
      "600"
    ]
  },
  "kunkka_admirals_rum": {
    "dname": "Admiral's Rum",
    "img": "/apps/dota2/images/dota_react/abilities/kunkka_admirals_rum.png",
    "behavior": "Passive",
    "cd": "60"
  },
  "shadow_shaman_ether_shock": {
    "dname": "Ether Shock",
    "img": "/apps/dota2/images/dota_react/abilities/shadow_shaman_ether_shock.png",
    "desc": "Creates a cone of ethereal energy that strikes multiple enemy units.",
    "behavior": "Unit Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "14",
      "12",
      "10",
      "8"
    ],
    "mc": [
      "90",
      "105",
      "120",
      "135"
    ],
    "dmg": [
      "125",
      "190",
      "255",
      "320"
    ]
  },
  "abaddon_withering_mist": {
    "dname": "Withering Mist",
    "img": "/apps/dota2/images/dota_react/abilities/abaddon_withering_mist.png",
    "desc": "Damaging enemies applies the Withering Mist debuff for 5s. Affected enemies have their Health Restoration reduced by 35% if they are below 40% HP.",
    "behavior": "Passive"
  },
  "slark_shadow_dance": {
    "dname": "Shadow Dance",
    "img": "/apps/dota2/images/dota_react/abilities/slark_shadow_dance.png",
    "desc": "When not visible to the enemy team, Slark passively gains bonus movement speed and health regeneration. If Slark is damaged by a neutral unit, the passive movement and health regeneration bonuses are lost for 2 seconds.\n\nWhen activated, Slark hides himself in a cloud of shadows, becoming immune to detection. Attacking, casting spells, and using items will not reveal Slark, but enemies can see the cloud itself.",
    "behavior": [
      "Instant Cast",
      "No Target"
    ],
    "cd": [
      "50",
      "40",
      "30"
    ],
    "mc": "100"
  },
  "lina_flame_cloak": {
    "dname": "Flame Cloak",
    "img": "/apps/dota2/images/dota_react/abilities/lina_flame_cloak.png",
    "desc": "Grants Lina unobstructed movement and increases her spell damage and magic resistance. Grants max fiery soul stacks on activation.",
    "behavior": [
      "Instant Cast",
      "No Target"
    ],
    "cd": "25",
    "mc": "50"
  },
  "invoker_tornado": {
    "dname": "Tornado",
    "img": "/apps/dota2/images/dota_react/abilities/invoker_tornado.png",
    "desc": "Unleashes a fast moving tornado that picks up enemy units in its path, suspending them helplessly in the air shortly before allowing them to plummet to their doom. Travels further based on the level of Wex. Holds enemies in the air for a duration based on the level of Quas. Deals base damage plus added damage based on levels in Wex.\n\nDISPEL TYPE: Basic Dispel",
    "behavior": [
      "Point Target",
      "Hidden"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": "27",
    "mc": "140"
  },
  "wisp_overcharge": {
    "dname": "Overcharge",
    "img": "/apps/dota2/images/dota_react/abilities/wisp_overcharge.png",
    "desc": "Io gains health regeneration based on max health. If Io is Tethered to an ally, that unit also gains any bonuses granted by Overcharge.",
    "behavior": [
      "No Target",
      "Instant Cast"
    ],
    "cd": [
      "25",
      "22",
      "19",
      "16"
    ],
    "mc": [
      "40",
      "60",
      "80",
      "100"
    ]
  },
  "terrorblade_reflection": {
    "dname": "Reflection",
    "img": "/apps/dota2/images/dota_react/abilities/terrorblade_reflection.png",
    "desc": "Terrorblade brings forth an invulnerable dark reflection of all enemy heroes in a target area. Affected enemy heroes have movement and attack speeds slowed and attacked by their reflection.",
    "behavior": [
      "Point Target",
      "AOE"
    ],
    "bkbpierce": "No",
    "cd": [
      "23",
      "20",
      "17",
      "14"
    ],
    "mc": [
      "60",
      "65",
      "70",
      "75"
    ]
  },
  "mirana_arrow": {
    "dname": "Sacred Arrow",
    "img": "/apps/dota2/images/dota_react/abilities/mirana_arrow.png",
    "desc": "Fires a long-range arrow with deadly precision, which stuns and damages the first enemy unit it strikes. The stun duration ranges from 0.01 to 2.6 seconds, with bonus damage up to 180 added, based on the distance the arrow travels to its target. Instantly kills the first non-ancient creep it hits.",
    "behavior": "Point Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "19",
      "18",
      "17",
      "16"
    ],
    "mc": "90",
    "dmg": [
      "60",
      "150",
      "240",
      "330"
    ]
  },
  "invoker_ice_wall": {
    "dname": "Ice Wall",
    "img": "/apps/dota2/images/dota_react/abilities/invoker_ice_wall.png",
    "desc": "Generates a wall of solid ice directly in front of Invoker for a duration based on the level of Quas. The bitter cold emanating from it greatly slows nearby enemies based on the level of Quas and deals damage each second based on the level of Exort.",
    "behavior": [
      "No Target",
      "Hidden"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": "23",
    "mc": "125"
  },
  "silencer_curse_of_the_silent": {
    "dname": "Arcane Curse",
    "img": "/apps/dota2/images/dota_react/abilities/silencer_curse_of_the_silent.png",
    "desc": "Curses the target area, dealing damage and causing enemy heroes to take damage over time and slowing their movement speed. Silenced enemies take 1.25x slow and damage. Anytime affected enemies cast a spell, the duration is increased. The duration is paused as long as the target is silenced.",
    "behavior": [
      "Point Target",
      "AOE"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "22",
      "20",
      "18",
      "16"
    ],
    "mc": [
      "120",
      "130",
      "140",
      "150"
    ],
    "dmg": [
      "16",
      "24",
      "32",
      "40"
    ]
  },
  "witch_doctor_death_ward": {
    "dname": "Death Ward",
    "img": "/apps/dota2/images/dota_react/abilities/witch_doctor_death_ward.png",
    "desc": "CHANNELED - Summons a deadly ward to attack enemy heroes within its attack range. Lasts a maximum of 8 seconds. Death Ward has 50% bonus accuracy.",
    "behavior": [
      "Point Target",
      "Channeled"
    ],
    "dmg_type": "Pure",
    "bkbpierce": "Yes",
    "cd": [
      "100",
      "90",
      "80"
    ],
    "mc": "200",
    "dmg": [
      "60",
      "95",
      "130"
    ]
  },
  "alchemist_unstable_concoction_throw": {
    "dname": "Unstable Concoction Throw",
    "img": "/apps/dota2/images/dota_react/abilities/alchemist_unstable_concoction_throw.png",
    "desc": "Throw it before it blows up!",
    "behavior": [
      "Unit Target",
      "AOE",
      "Hidden"
    ],
    "bkbpierce": "No"
  },
  "monkey_king_wukongs_command": {
    "dname": "Wukong's Command",
    "img": "/apps/dota2/images/dota_react/abilities/monkey_king_wukongs_command.png",
    "desc": "Monkey King creates a circular formation of soldiers that spread out from his position. If Monkey King leaves the area his soldiers disperse. The soldiers have Monkey King's attack and only target heroes. Monkey King is granted bonus armor for the spell's duration.",
    "behavior": [
      "Point Target",
      "AOE"
    ],
    "dmg_type": "Physical",
    "cd": [
      "100",
      "90",
      "80"
    ],
    "mc": "100"
  },
  "razor_plasma_field": {
    "dname": "Plasma Field",
    "img": "/apps/dota2/images/dota_react/abilities/razor_plasma_field.png",
    "desc": "Releases a wave of energetic plasma that grows in power as it expands, but also zaps on contraction, slowing and dealing damage to enemy units caught in its path. Damage and slow increases with distance from Razor. The Plasma Field hits each unit twice, once each direction.",
    "behavior": [
      "No Target",
      "Instant Cast"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "13",
      "12",
      "11",
      "10"
    ],
    "mc": "125"
  },
  "templar_assassin_psionic_trap": {
    "dname": "Psionic Trap",
    "img": "/apps/dota2/images/dota_react/abilities/templar_assassin_psionic_trap.png",
    "desc": "Templar Assassin places mystical traps that invisibly monitor enemy movement. When sprung at her command, they deal a small amount of damage and exert a slowing influence of 20% in a 400 radius. Traps charge up to slow 50% after 3.5 seconds. Deals bonus damage when fully charged.",
    "behavior": "Point Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "11",
      "8",
      "5"
    ],
    "mc": "15"
  },
  "earth_spirit_petrify": {
    "dname": "Enchant Remnant",
    "img": "/apps/dota2/images/dota_react/abilities/earth_spirit_petrify.png",
    "desc": "Earth Spirit temporarily enchants a hero, granting them the properties of a Stone Remnant. After a short duration the remnant shatters, releasing the hero and damaging nearby enemies. \nCan be cast on Stone Remnants. Has a 5 second cooldown when used that way.\nHas a larger cast range when cast on an ally hero.",
    "behavior": [
      "Unit Target",
      "Hidden"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": "45",
    "mc": "150"
  },
  "winter_wyvern_cold_embrace": {
    "dname": "Cold Embrace",
    "img": "/apps/dota2/images/dota_react/abilities/winter_wyvern_cold_embrace.png",
    "desc": "Encases an ally in an icy cocoon, freezing them solid while healing a base amount as well as a percentage of their maximum health each second. The cocoon blocks all physical damage.",
    "behavior": "Unit Target",
    "bkbpierce": "Yes",
    "cd": [
      "24",
      "21",
      "18",
      "15"
    ],
    "mc": [
      "50",
      "60",
      "70",
      "80"
    ]
  },
  "void_spirit_astral_step": {
    "dname": "Astral Step",
    "img": "/apps/dota2/images/dota_react/abilities/void_spirit_astral_step.png",
    "desc": "Void Spirit tears a rift through the astral plane to appear at the target location, attacking all enemies along the path. This attack inflicts a void mark that slows for 1.25 seconds and then detonates.",
    "behavior": "Point Target",
    "dmg_type": "Magical",
    "bkbpierce": "Yes",
    "cd": "0",
    "mc": "90"
  },
  "lion_mana_drain": {
    "dname": "Mana Drain",
    "img": "/apps/dota2/images/dota_react/abilities/lion_mana_drain.png",
    "desc": "CHANNELED - Channels magical energy, taking mana and slowing enemies over time. If the enemy has no mana remaining, the slow is increased by 15%. \n\n Can target allies to give them mana and movement speed at a 50% rate.",
    "behavior": [
      "Unit Target",
      "Channeled"
    ],
    "bkbpierce": "No",
    "cd": [
      "15",
      "12",
      "9",
      "6"
    ],
    "mc": "0"
  },
  "morphling_adaptive_strike_agi": {
    "dname": "Adaptive Strike",
    "img": "/apps/dota2/images/dota_react/abilities/morphling_adaptive_strike_agi.png",
    "desc": "Launches a surge of water toward an enemy unit, dealing base damage plus additional damage based on Morphling's agility times a multiplier. If Morphling's agility is 50% higher than strength, the maximum agility multiplier is used.\n\nThe target is also knocked back and stunned based on Morphling's strength. If his strength is 50% higher than his agility, the maximum knockback distance and stun is used.",
    "behavior": "Unit Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "17",
      "14",
      "11",
      "8"
    ],
    "mc": [
      "40",
      "50",
      "60",
      "70"
    ]
  },
  "kez_talon_toss": {
    "dname": "Talon Toss",
    "img": "/apps/dota2/images/dota_react/abilities/kez_talon_toss.png",
    "desc": "Kez throws a Sai at the target unit, applying a fixed damage attack and silence.",
    "behavior": [
      "Hidden",
      "Unit Target",
      "AOE"
    ],
    "dmg_type": "Physical",
    "bkbpierce": "No",
    "cd": [
      "13",
      "11",
      "9",
      "7"
    ],
    "mc": [
      "60",
      "65",
      "70",
      "75"
    ],
    "dmg": [
      "60",
      "120",
      "180",
      "240"
    ]
  },
  "ogre_magi_unrefined_fireblast": {
    "dname": "Unrefined Fireblast",
    "img": "/apps/dota2/images/dota_react/abilities/ogre_magi_unrefined_fireblast.png",
    "desc": "Blasts an enemy unit with a wave of fire, dealing 150 + 1.5x Ogre's Strength in damage and stunning the target. Its mana cost is 35% of Ogre Magi's current mana.",
    "behavior": [
      "Unit Target",
      "Hidden"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": "6",
    "mc": "400"
  },
  "pangolier_swashbuckle": {
    "dname": "Swashbuckle",
    "img": "/apps/dota2/images/dota_react/abilities/pangolier_swashbuckle.png",
    "desc": "Pangolier dashes along the target line, then slashes and briefly slows all enemies in the drawn direction with several quick swipes.\n\nLucky Shot has a chance to activate from this damage.",
    "behavior": "Point Target",
    "dmg_type": "Physical",
    "bkbpierce": "Yes",
    "cd": [
      "20",
      "17",
      "14",
      "11"
    ],
    "mc": [
      "75",
      "80",
      "85",
      "90"
    ]
  },
  "earth_spirit_boulder_smash": {
    "dname": "Boulder Smash",
    "img": "/apps/dota2/images/dota_react/abilities/earth_spirit_boulder_smash.png",
    "desc": "Earth Spirit smashes the target enemy or ally, sending them in the direction he is facing. If Earth Spirit targets an area, he will smash the nearest unit in a 200 radius, prioritizing Stone Remnants. The travelling unit or Remnant damages all enemy units it hits. If an enemy is hit by a Stone Remnant, they are also slowed. Stone Remnants travel further than other units.",
    "behavior": [
      "Point Target",
      "Unit Target"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "20",
      "17",
      "14",
      "11"
    ],
    "mc": "100",
    "dmg": [
      "110",
      "180",
      "250",
      "320"
    ]
  },
  "brewmaster_thunder_clap": {
    "dname": "Thunder Clap",
    "img": "/apps/dota2/images/dota_react/abilities/brewmaster_thunder_clap.png",
    "desc": "Slams the ground, dealing damage and slowing the movement speed and attack rate of nearby enemy units.",
    "behavior": "No Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "18",
      "16",
      "14",
      "12"
    ],
    "mc": "100",
    "dmg": [
      "80",
      "160",
      "240",
      "320"
    ]
  },
  "keeper_of_the_light_spirit_form": {
    "dname": "Spirit Form",
    "img": "/apps/dota2/images/dota_react/abilities/keeper_of_the_light_spirit_form.png",
    "desc": "Ezalor temporarily turns his body luminescent, gaining bonus movement speed, cast range, and allows Illuminate to be channeled by a separate spirit and heal allies.",
    "behavior": "No Target",
    "cd": [
      "85",
      "80",
      "75"
    ],
    "mc": [
      "75",
      "125",
      "175"
    ]
  },
  "monkey_king_untransform": {
    "dname": "Revert Form",
    "img": "/apps/dota2/images/dota_react/abilities/monkey_king_untransform.png",
    "desc": "Reverts Monkey King's shape to his original form.",
    "behavior": [
      "No Target",
      "Hidden"
    ],
    "cd": "1",
    "mc": "0"
  },
  "dawnbreaker_luminosity": {
    "dname": "Luminosity",
    "img": "/apps/dota2/images/dota_react/abilities/dawnbreaker_luminosity.png",
    "behavior": "Passive",
    "bkbpierce": "Yes"
  },
  "primal_beast_onslaught": {
    "dname": "Onslaught",
    "img": "/apps/dota2/images/dota_react/abilities/primal_beast_onslaught.png",
    "desc": "Primal Beast charges up and then runs in the chosen direction, knocking back enemies and allies alike. Enemy units are damaged and stunned on impact. The longer the charge duration, the farther Primal Beast's momentum will carry him. \n\n Can be cancelled at any time with the Stop command.",
    "behavior": "Point Target",
    "dmg_type": "Physical",
    "bkbpierce": "No",
    "cd": [
      "25",
      "22",
      "19",
      "16"
    ],
    "mc": "120",
    "dmg": [
      "75",
      "170",
      "265",
      "360"
    ]
  },
  "templar_assassin_meld": {
    "dname": "Meld",
    "img": "/apps/dota2/images/dota_react/abilities/templar_assassin_meld.png",
    "desc": "Templar Assassin conceals herself, becoming invisible as long as she remains still. If Meld's invisibility is broken by attacking an enemy, Lanaya's attack will deal bonus damage to the enemy and reduce their armor for 6 seconds.",
    "behavior": "No Target",
    "dmg_type": "Physical",
    "bkbpierce": "Yes",
    "cd": [
      "11",
      "9",
      "7",
      "5"
    ],
    "mc": [
      "35",
      "40",
      "45",
      "50"
    ]
  },
  "rattletrap_overclocking": {
    "dname": "Overclocking",
    "img": "/apps/dota2/images/dota_react/abilities/rattletrap_overclocking.png",
    "desc": "Supercharges Clockwerks abilities: Battery Assault affects all enemies in its range; Clockwerk's attack speed in Power Cogs is increased; Rocket Flares have a reduced cooldown and fire additional rockets to either side of the target; Hookshot stun radius and duration is increased; Jetpack moves faster. Clockwerk's movement and attack speed becomes slowed to a crawl after the duration runs out.",
    "behavior": [
      "No Target",
      "Instant Cast",
      "Hidden"
    ],
    "bkbpierce": "Yes",
    "cd": "50",
    "mc": "90"
  },
  "earthshaker_slugger": {
    "dname": "Slugger",
    "img": "/apps/dota2/images/dota_react/abilities/earthshaker_slugger.png",
    "desc": "Enemies killed with Enchant Totem or Earthshaker's other abilities are sent flying, dealing damage to enemies they hit.",
    "behavior": "Passive"
  },
  "pudge_meat_hook": {
    "dname": "Meat Hook",
    "img": "/apps/dota2/images/dota_react/abilities/pudge_meat_hook.png",
    "desc": "Launches a bloody hook toward a unit or location. The hook will snag the first unit it encounters, dragging the unit back to Pudge, killing it if it's a non-ancient creep and dealing damage if it is an enemy otherwise.",
    "behavior": "Point Target",
    "dmg_type": "Pure",
    "bkbpierce": "Yes",
    "cd": [
      "18",
      "16",
      "14",
      "12"
    ],
    "mc": "110",
    "dmg": [
      "150",
      "220",
      "290",
      "360"
    ]
  },
  "queenofpain_blink": {
    "dname": "Blink",
    "img": "/apps/dota2/images/dota_react/abilities/queenofpain_blink.png",
    "desc": "Short distance teleportation that allows Queen of Pain to move in and out of combat.",
    "behavior": "Point Target",
    "cd": [
      "12",
      "10",
      "8",
      "6"
    ],
    "mc": "65"
  },
  "nevermore_shadowraze2": {
    "dname": "Shadowraze",
    "img": "/apps/dota2/images/dota_react/abilities/nevermore_shadowraze2.png",
    "desc": "Shadow Fiend razes the ground a short distance away from him, dealing damage to enemy units in the area. Adds a stacking damage amplifier on the target that causes the enemy to take bonus Shadowraze damage per stack.",
    "behavior": "No Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": "9",
    "mc": "80"
  },
  "tidehunter_ravage": {
    "dname": "Ravage",
    "img": "/apps/dota2/images/dota_react/abilities/tidehunter_ravage.png",
    "desc": "Slams the ground, causing tentacles to erupt in all directions, damaging and stunning all nearby enemy units.",
    "behavior": "No Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "150",
      "145",
      "140"
    ],
    "mc": [
      "125",
      "225",
      "325"
    ],
    "dmg": [
      "275",
      "375",
      "475"
    ]
  },
  "rubick_fade_bolt": {
    "dname": "Fade Bolt",
    "img": "/apps/dota2/images/dota_react/abilities/rubick_fade_bolt.png",
    "desc": "Rubick creates a powerful stream of arcane energy that travels between enemy units, dealing damage and reducing their attack damage. Each jump deals less damage.",
    "behavior": "Unit Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "16",
      "14",
      "12",
      "10"
    ],
    "mc": [
      "110",
      "125",
      "140",
      "155"
    ],
    "dmg": [
      "100",
      "175",
      "250",
      "325"
    ]
  },
  "shadow_demon_shadow_poison_release": {
    "dname": "Shadow Poison Release",
    "img": "/apps/dota2/images/dota_react/abilities/shadow_demon_shadow_poison_release.png",
    "desc": "Releases the poison to do damage on all affected enemies. Units under the effect of Disruption can still be affected by Shadow Poison.",
    "behavior": "No Target",
    "cd": "1"
  },
  "earth_spirit_stone_caller": {
    "dname": "Stone Remnant",
    "img": "/apps/dota2/images/dota_react/abilities/earth_spirit_stone_caller.png",
    "desc": "Call a Stone Remnant to the target location. Stone Remnants have no vision and are invulnerable, and can be used with Earth Spirit's abilities. Calling a Stone Remnant consumes a charge, which recharge over time. Stone Remnant has 7 charges.\n\nEarth Spirit passively gains 2.5% bonus damage per unused Stone Remnant charge, and gains an additional 7.5% bonus damage for 10s when a Stone Remnant is targeted with an ability (does not stack).",
    "behavior": "Point Target",
    "cd": "0",
    "mc": "0"
  },
  "tidehunter_dead_in_the_water": {
    "dname": "Dead in the Water",
    "img": "/apps/dota2/images/dota_react/abilities/tidehunter_dead_in_the_water.png",
    "desc": "Tidehunter attaches a heavy anchor to an enemy hero. The hero is leashed while attached to the anchor. Attempting to move more than 350 units away from the anchor forces the hero to 100 move speed, dragging the anchor behind them. The anchor can be destroyed with 4 hero attacks.",
    "behavior": "Unit Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": "35",
    "mc": "110",
    "dmg": "100"
  },
  "elder_titan_move_spirit": {
    "dname": "Move Astral Spirit",
    "img": "/apps/dota2/images/dota_react/abilities/elder_titan_move_spirit.png",
    "desc": "Moves the Astral Spirit to target location.",
    "behavior": [
      "Instant Cast",
      "Point Target",
      "Hidden"
    ],
    "cd": "0"
  },
  "slark_pounce": {
    "dname": "Pounce",
    "img": "/apps/dota2/images/dota_react/abilities/slark_pounce.png",
    "desc": "Slark leaps forward, leashing the first hero he connects. That unit can only move a limited distance away from Slark's landing position.",
    "behavior": "No Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "24",
      "20",
      "16",
      "12"
    ],
    "mc": "75"
  },
  "pangolier_gyroshell": {
    "dname": "Rolling Thunder",
    "img": "/apps/dota2/images/dota_react/abilities/pangolier_gyroshell.png",
    "desc": "Pangolier curls into a debuff immune ball with 60% additional magic resistance and rolls out. When rolling, he moves at an increased speed and can move through trees, but has a decreased ability to turn. Striking enemies knocks them back, inflicting damage proportional to his attack damage and stunning them when they land. \n\nColliding with walls or cliffs will cause a temporary pause while Pangolier reverses in direction.\n\nDISPEL TYPE: Basic Dispel",
    "behavior": "No Target",
    "dmg_type": "Physical",
    "bkbpierce": "No",
    "cd": [
      "90",
      "85",
      "80"
    ],
    "mc": [
      "100",
      "125",
      "150"
    ],
    "dmg": [
      "75",
      "150",
      "225"
    ]
  },
  "templar_assassin_refraction": {
    "dname": "Refraction",
    "img": "/apps/dota2/images/dota_react/abilities/templar_assassin_refraction.png",
    "desc": "Templar Assassin becomes highly elusive, gaining a small barrier and bonus to her damage. The damage and avoidance effects are separate, and have a limited number of instances. If a barrier is consumed, a new one is created as long as there are charges left. If an instance of damage would deal more damage than the remaining barrier, all of the damage is absorbed.",
    "behavior": [
      "No Target",
      "Instant Cast"
    ],
    "dmg_type": "Physical",
    "bkbpierce": "Yes",
    "cd": "14",
    "mc": "95"
  },
  "mirana_selemenes_faithful": {
    "dname": "Selemene's Faithful",
    "img": "/apps/dota2/images/dota_react/abilities/mirana_selemenes_faithful.png",
    "desc": "Healing Lotuses are 50% more effective on Mirana and her allies.",
    "behavior": "Passive"
  },
  "templar_assassin_trap_teleport": {
    "dname": "Psionic Projection",
    "img": "/apps/dota2/images/dota_react/abilities/templar_assassin_trap_teleport.png",
    "desc": "CHANNELED - Allows Templar Assassin to teleport to any Psionic Trap after channeling for 2 seconds, detonating it upon arrival as if it was fully charged and instantly dealing 400 bonus damage. Channeling Psionic Projection does not break Meld.",
    "behavior": [
      "Point Target",
      "Hidden",
      "Channeled"
    ],
    "cd": "10",
    "mc": "50"
  },
  "mars_arena_of_blood": {
    "dname": "Arena Of Blood",
    "img": "/apps/dota2/images/dota_react/abilities/mars_arena_of_blood.png",
    "desc": "After a short formation time, Mars summons an arena lined with the undead warriors of the Ash Legion, who block enemy attacks and movement. Enemy heroes near the inside edge of the arena will be attacked by spears, dealing damage and knocking them back.",
    "behavior": [
      "Point Target",
      "AOE"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "100",
      "95",
      "90"
    ],
    "mc": [
      "150",
      "200",
      "250"
    ]
  },
  "chaos_knight_phantasm": {
    "dname": "Phantasm",
    "img": "/apps/dota2/images/dota_react/abilities/chaos_knight_phantasm.png",
    "desc": "Summons several phantasmal copies of the Chaos Knight from alternate dimensions. The phantasms are illusions that deal 100% damage, but take 350% damage.\nDISPEL TYPE: Basic Dispel",
    "behavior": "No Target",
    "cd": "75",
    "mc": [
      "100",
      "200",
      "300"
    ]
  },
  "windrunner_powershot": {
    "dname": "Powershot",
    "img": "/apps/dota2/images/dota_react/abilities/windrunner_powershot.png",
    "desc": "CHANNELED - Windranger charges her bow for up to 1 second for a single powerful shot, which deals more damage the longer it is charged. The arrow damages and slows enemies' movement speed along its path. For each enemy that Powershot hits, its damage and slow is reduced.",
    "behavior": [
      "Point Target",
      "Channeled"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "12",
      "11",
      "10",
      "9"
    ],
    "mc": [
      "90",
      "100",
      "110",
      "120"
    ],
    "dmg": [
      "170",
      "270",
      "370",
      "470"
    ]
  },
  "kunkka_tidebringer": {
    "dname": "Tidebringer",
    "img": "/apps/dota2/images/dota_react/abilities/kunkka_tidebringer.png",
    "desc": "Kunkka's legendary sword grants increased damage and cleaves a large area of effect in front of him for a single strike.",
    "behavior": [
      "Unit Target",
      "Autocast",
      "Attack Modifier"
    ],
    "dmg_type": "Physical",
    "cd": [
      "13",
      "10",
      "7",
      "4"
    ]
  },
  "ringmaster_wheel": {
    "dname": "Wheel of Wonder",
    "img": "/apps/dota2/images/dota_react/abilities/ringmaster_wheel.png",
    "desc": "Ringmaster rolls the Wheel of Wonder to the targeted location, knocking aside enemies along the way. After it reaches its target, enemies in range of the wheel take damage over time and are slowed by -50%.\n\nEnemy heroes who face the wheel for more than 0.5 seconds are mesmerized and drawn towards it. The first enemy to be mesmerized triggers a timer for the wheel to explode. If the timer is not triggered, it will automatically explode after 4 seconds.",
    "behavior": [
      "Point Target",
      "AOE"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "90",
      "80",
      "70"
    ],
    "mc": [
      "150",
      "225",
      "300"
    ]
  },
  "pangolier_shield_crash": {
    "dname": "Shield Crash",
    "img": "/apps/dota2/images/dota_react/abilities/pangolier_shield_crash.png",
    "desc": "Pangolier jumps in the air and slams back to the ground in front of his current position damaging all enemies in a radius. Pangolier gains an all damage barrier for a short time if Shield Crash hits an enemy hero.\n\nForward movement is maintained if Shield Crash is used while Rolling Thunder is active, and allows Rolling Thunder to clear walls or cliffs.",
    "behavior": [
      "No Target",
      "Instant Cast"
    ],
    "dmg_type": "Physical",
    "bkbpierce": "No",
    "cd": [
      "16",
      "13",
      "10",
      "7"
    ],
    "mc": "75",
    "dmg": [
      "50",
      "100",
      "150",
      "200"
    ]
  },
  "jakiro_macropyre": {
    "dname": "Macropyre",
    "img": "/apps/dota2/images/dota_react/abilities/jakiro_macropyre.png",
    "desc": "Jakiro exhales a wide line of lasting flames, which deals damage per second to any enemy units caught in the fire.",
    "behavior": "Point Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "90",
      "80",
      "70"
    ],
    "mc": [
      "300",
      "400",
      "500"
    ]
  },
  "batrider_flamebreak": {
    "dname": "Flamebreak",
    "img": "/apps/dota2/images/dota_react/abilities/batrider_flamebreak.png",
    "desc": "Hurls an explosive cocktail that explodes when it reaches the target location, knocking back, slowing and dealing damage over time to enemies in the area.",
    "behavior": [
      "AOE",
      "Point Target"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "22",
      "19",
      "16",
      "13"
    ],
    "mc": [
      "110",
      "115",
      "120",
      "125"
    ]
  },
  "winter_wyvern_eldwurm_scholar": {
    "dname": "Eldwurm Scholar",
    "img": "/apps/dota2/images/dota_react/abilities/winter_wyvern_eldwurm_scholar.png",
    "desc": "When a Shrine of Wisdom grants experience to allies, Winter Wyvern shares the knowledge with her entire team, granting 20% of the experience to each of the 3 heroes that did not collect the initial bonus.",
    "behavior": "Passive"
  },
  "dragon_knight_dragon_blood": {
    "dname": "Wyrm's Wrath",
    "img": "/apps/dota2/images/dota_react/abilities/dragon_knight_dragon_blood.png",
    "desc": "The life blood of the Dragon improves Dragon Knight's attacks. When in Dragon form, these effects are stronger.",
    "behavior": "Passive"
  },
  "medusa_split_shot": {
    "dname": "Split Shot",
    "img": "/apps/dota2/images/dota_react/abilities/medusa_split_shot.png",
    "desc": "Medusa magically splits her shot into several arrows. These arrows deal a lower percent of her normal damage.\n\nThe extra targets will not receive other attack effects (such as critical strike).",
    "behavior": [
      "No Target",
      "Instant Cast"
    ],
    "bkbpierce": "Yes"
  },
  "hoodwink_bushwhack": {
    "dname": "Bushwhack",
    "img": "/apps/dota2/images/dota_react/abilities/hoodwink_bushwhack.png",
    "desc": "Tosses a net trap that stuns enemies if they are near a tree in the area. Affected enemies take damage over time and are pulled towards the tree nearest to them within the target area, and have their vision reduced to 0 for the duration of the stun.",
    "behavior": [
      "Point Target",
      "AOE"
    ],
    "dmg_type": "Magical",
    "cd": [
      "15",
      "14",
      "13",
      "12"
    ],
    "mc": [
      "90",
      "100",
      "110",
      "120"
    ]
  },
  "viper_viper_strike": {
    "dname": "Viper Strike",
    "img": "/apps/dota2/images/dota_react/abilities/viper_viper_strike.png",
    "desc": "Viper slows the targeted enemy unit's movement and attack speed while also disabling their passives and dealing poison damage over time. The slowing effect reduces over the duration of the poison.",
    "behavior": "Unit Target",
    "dmg_type": "Magical",
    "bkbpierce": "Yes",
    "cd": [
      "50",
      "40",
      "30"
    ],
    "mc": [
      "100",
      "150",
      "200"
    ]
  },
  "pudge_innate_graft_flesh": {
    "dname": "Flesh Heap",
    "img": "/apps/dota2/images/dota_react/abilities/pudge_innate_graft_flesh.png",
    "desc": "Pudge's skin thickens permanently every time he kills an enemy Hero, gaining 1.1 bonus Strength for each stack.",
    "behavior": "Passive"
  },
  "hoodwink_sharpshooter_release": {
    "dname": "End Sharpshooter",
    "img": "/apps/dota2/images/dota_react/abilities/hoodwink_sharpshooter_release.png",
    "desc": "Release the charged up shot, regain ability to move and attack.",
    "behavior": [
      "Instant Cast",
      "No Target",
      "Hidden"
    ]
  },
  "shredder_timber_chain": {
    "dname": "Timber Chain",
    "img": "/apps/dota2/images/dota_react/abilities/shredder_timber_chain.png",
    "desc": "Timbersaw fires a chain that embeds itself in the first tree it hits, pulling him towards it. Any enemy in the path takes damage.",
    "behavior": "Point Target",
    "dmg_type": "Pure",
    "bkbpierce": "No",
    "cd": "4",
    "mc": [
      "60",
      "70",
      "80",
      "90"
    ],
    "dmg": [
      "45",
      "100",
      "155",
      "210"
    ]
  },
  "tinker_rearm": {
    "dname": "Rearm",
    "img": "/apps/dota2/images/dota_react/abilities/tinker_rearm.png",
    "desc": "CHANNELED - Resets the cooldown on Tinker's abilities.",
    "behavior": [
      "No Target",
      "Channeled"
    ],
    "cd": [
      "7",
      "6",
      "5"
    ],
    "mc": [
      "100",
      "150",
      "200"
    ]
  },
  "phoenix_launch_fire_spirit": {
    "dname": "Launch Fire Spirit",
    "img": "/apps/dota2/images/dota_react/abilities/phoenix_launch_fire_spirit.png",
    "desc": "Each fire spirit can be launched independently at a targeted area of effect. Affected enemy units take damage over time and have their attack speed greatly reduced.",
    "behavior": [
      "Point Target",
      "AOE",
      "Hidden"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": "0",
    "mc": "0"
  },
  "snapfire_lil_shredder": {
    "dname": "Lil' Shredder",
    "img": "/apps/dota2/images/dota_react/abilities/snapfire_lil_shredder.png",
    "desc": "Snapfire heats up her mounted turret to rapidly fire 5 attacks dealing fixed damage plus a percentage of her attack damage. Each attack reduces the enemy's armor. Provides bonus attack range for the duration.",
    "behavior": "No Target",
    "dmg_type": "Physical",
    "cd": [
      "24",
      "20",
      "16",
      "12"
    ],
    "mc": [
      "70",
      "80",
      "90",
      "100"
    ]
  },
  "chen_holy_persuasion": {
    "dname": "Holy Persuasion",
    "img": "/apps/dota2/images/dota_react/abilities/chen_holy_persuasion.png",
    "desc": "Chen takes control of an enemy or neutral creep and receives a percentage of its bounty. Its maximum health is set to 400 + 50 per Chen Level. Converted creeps will have increased movement speed and bonus damage.",
    "behavior": "Unit Target",
    "bkbpierce": "Yes",
    "cd": "15",
    "mc": [
      "110",
      "130",
      "150",
      "170"
    ]
  },
  "winter_wyvern_splinter_blast": {
    "dname": "Splinter Blast",
    "img": "/apps/dota2/images/dota_react/abilities/winter_wyvern_splinter_blast.png",
    "desc": "Launches a ball of brittle ice toward a unit. The ice shatters on impact, leaving the primary target completely unaffected, while hurling damaging splinters into nearby enemies in a 500 base radius. Enemies struck by these splinters are slowed by 28%.",
    "behavior": [
      "Unit Target",
      "AOE"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": "6",
    "mc": [
      "105",
      "115",
      "125",
      "135"
    ],
    "dmg": [
      "80",
      "160",
      "240",
      "320"
    ]
  },
  "grimstroke_soul_chain": {
    "dname": "Soulbind",
    "img": "/apps/dota2/images/dota_react/abilities/grimstroke_soul_chain.png",
    "desc": "Binds a targeted enemy hero to its nearest allied hero within the bind radius, preventing both from moving away from each other. Any unit-targeted ability that either bound hero receives also gets cast on the other hero. If the bind is broken before the duration expires, the initial target will be bound to its nearest allied hero in the radius.",
    "behavior": [
      "Unit Target",
      "AOE"
    ],
    "bkbpierce": "Yes",
    "cd": [
      "70",
      "65",
      "60"
    ],
    "mc": [
      "150",
      "200",
      "250"
    ]
  },
  "puck_ethereal_jaunt": {
    "dname": "Ethereal Jaunt",
    "img": "/apps/dota2/images/dota_react/abilities/puck_ethereal_jaunt.png",
    "desc": "Teleports Puck to a flying Illusory Orb.",
    "behavior": "No Target"
  },
  "venomancer_noxious_plague": {
    "dname": "Noxious Plague",
    "img": "/apps/dota2/images/dota_react/abilities/venomancer_noxious_plague.png",
    "desc": "Infects an enemy with a deadly plague that does an initial burst of damage and additional damage over time based on the unit's maximum health. The plague slows the target and nearby enemies based on their distance to the target. When the target dies or the debuff expires, all nearby enemies are infected with a noncommunicable version of the plague.",
    "behavior": "Unit Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "100",
      "90",
      "80"
    ],
    "mc": [
      "200",
      "300",
      "400"
    ]
  },
  "tidehunter_anchor_smash": {
    "dname": "Anchor Smash",
    "img": "/apps/dota2/images/dota_react/abilities/tidehunter_anchor_smash.png",
    "desc": "Tidehunter swings his mighty anchor to attack and deal bonus damage to nearby enemies and reduce their attack damage.",
    "behavior": "No Target",
    "dmg_type": "Physical",
    "bkbpierce": "No",
    "cd": [
      "7",
      "6",
      "5",
      "4"
    ],
    "mc": [
      "40",
      "45",
      "50",
      "55"
    ]
  },
  "riki_backstab": {
    "dname": "Cloak and Dagger",
    "img": "/apps/dota2/images/dota_react/abilities/riki_backstab.png",
    "desc": "Riki fades into the shadows, becoming invisible until he attacks. Hero kills and assists grant additional experience.",
    "behavior": "Passive",
    "bkbpierce": "Yes"
  },
  "sven_warcry": {
    "dname": "Warcry",
    "img": "/apps/dota2/images/dota_react/abilities/sven_warcry.png",
    "desc": "Sven's Warcry heartens his allied heroes for battle, increasing their armor and movement speed. Lasts 8 seconds.",
    "behavior": [
      "No Target",
      "Instant Cast"
    ],
    "bkbpierce": "Yes",
    "cd": [
      "36",
      "32",
      "28",
      "24"
    ],
    "mc": [
      "30",
      "35",
      "40",
      "45"
    ]
  },
  "bane_nightmare_end": {
    "dname": "Nightmare End",
    "img": "/apps/dota2/images/dota_react/abilities/bane_nightmare_end.png",
    "desc": "Ends all ongoing Nightmares.",
    "behavior": [
      "Hidden",
      "No Target"
    ]
  },
  "lycan_howl": {
    "dname": "Howl",
    "img": "/apps/dota2/images/dota_react/abilities/lycan_howl.png",
    "desc": "Strikes fear into enemies, reducing armor and attack damage of all enemies within 2000 range of Lycan and his wolves. At night, Howl's armor and attack damage reductions are global.",
    "behavior": "No Target",
    "bkbpierce": "No",
    "cd": [
      "22",
      "20",
      "18",
      "16"
    ],
    "mc": "40"
  },
  "life_stealer_rage": {
    "dname": "Rage",
    "img": "/apps/dota2/images/dota_react/abilities/life_stealer_rage.png",
    "desc": "Launch into a maddened rage, becoming Debuff Immune and increasing magic resistance.\n\nDISPEL TYPE: Basic Dispel",
    "behavior": [
      "No Target",
      "Instant Cast"
    ],
    "cd": [
      "20",
      "19",
      "18",
      "17"
    ],
    "mc": [
      "80",
      "100",
      "120",
      "140"
    ]
  },
  "elder_titan_tip_the_scales": {
    "dname": "Tip the Scales",
    "img": "/apps/dota2/images/dota_react/abilities/elder_titan_tip_the_scales.png",
    "desc": "Allied creeps and buildings affected by Glyph of Fortification or Roshan's Banner deal 100% bonus damage.",
    "behavior": "Passive",
    "bkbpierce": "No"
  },
  "spirit_breaker_greater_bash": {
    "dname": "Greater Bash",
    "img": "/apps/dota2/images/dota_react/abilities/spirit_breaker_greater_bash.png",
    "desc": "Gives a chance to stun and knockback an enemy unit on an attack. Deals a percentage of movement speed as damage.",
    "behavior": "Passive",
    "dmg_type": "Magical",
    "bkbpierce": "Yes",
    "cd": "1.2"
  },
  "keeper_of_the_light_will_o_wisp": {
    "dname": "Will-O-Wisp",
    "img": "/apps/dota2/images/dota_react/abilities/keeper_of_the_light_will_o_wisp.png",
    "desc": "Summons Ignis Fatuus at the targeted area. Alternates on and off, drawing enemies closer with its mesmerising flicker.",
    "behavior": [
      "Point Target",
      "AOE",
      "Hidden"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": "60",
    "mc": "150",
    "dmg": "85"
  },
  "huskar_blood_magic": {
    "dname": "Blood Magic",
    "img": "/apps/dota2/images/dota_react/abilities/huskar_blood_magic.png",
    "desc": "Huskar does not have mana. Mana costs of items are converted into health costs.Huskar's Health Costs are Magical Damage and can be reduced by Magic Resist.",
    "behavior": "Passive"
  },
  "arc_warden_spark_wraith": {
    "dname": "Spark Wraith",
    "img": "/apps/dota2/images/dota_react/abilities/arc_warden_spark_wraith.png",
    "desc": "Summons a Spark Wraith that slowly materializes and patrols a targeted area until an enemy comes within its range. Once a target has been found the wraith fuses with them, dealing magical damage and slowing the unit.",
    "behavior": [
      "Point Target",
      "AOE"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": "4",
    "mc": "80",
    "dmg": [
      "100",
      "170",
      "240",
      "310"
    ]
  },
  "sandking_epicenter": {
    "dname": "Epicenter",
    "img": "/apps/dota2/images/dota_react/abilities/sandking_epicenter.png",
    "desc": "After a cast point of 2 seconds, Sand King sends a disturbance into the earth, causing it to shudder violently. All enemies caught within range will take damage and become slowed. Each subsequent pulse increases the radius of damage dealt.",
    "behavior": "No Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "120",
      "110",
      "100"
    ],
    "mc": [
      "150",
      "225",
      "300"
    ]
  },
  "dazzle_innate_weave": {
    "dname": "Weave",
    "img": "/apps/dota2/images/dota_react/abilities/dazzle_innate_weave.png",
    "desc": "Dazzle's abilities apply Weave to both allies and enemies they affect, increasing allied armor and reducing enemy armor. Multiple instances of this effect stack.",
    "behavior": "Passive"
  },
  "monkey_king_mischief": {
    "dname": "Mischief",
    "img": "/apps/dota2/images/dota_react/abilities/monkey_king_mischief.png",
    "desc": "Changes Monkey King's shape to deceive opponents, using the environment nearby as inspiration for the disguise. Taking damage, attacking, or using any item or ability breaks Monkey King's disguise. Grants damage immunity for 0.1 seconds upon transforming.",
    "behavior": "No Target",
    "cd": [
      "24",
      "20",
      "16",
      "12"
    ],
    "mc": "0"
  },
  "lone_druid_spirit_link": {
    "dname": "Spirit Link",
    "img": "/apps/dota2/images/dota_react/abilities/lone_druid_spirit_link.png",
    "desc": "Links Lone Druid and the Spirit Bear, increasing their movement speed as well as sharing a percentage of their lifesteal with each other.",
    "behavior": "Passive",
    "cd": "0",
    "mc": "0"
  },
  "enchantress_enchant": {
    "dname": "Enchant",
    "img": "/apps/dota2/images/dota_react/abilities/enchantress_enchant.png",
    "desc": "Enchantress charms an enemy. If the enemy is a hero, they are dispelled and slowed for 3.5s.\n\n If the enemy is a creep, she brings it under her control and receives 40% of their experience bounty. Enchantress can control creeps for up to 30s. \n\nDISPEL TYPE: Basic Dispel",
    "behavior": "Unit Target",
    "bkbpierce": "No",
    "cd": [
      "30",
      "24",
      "18",
      "12"
    ],
    "mc": "70"
  },
  "terrorblade_metamorphosis": {
    "dname": "Metamorphosis",
    "img": "/apps/dota2/images/dota_react/abilities/terrorblade_metamorphosis.png",
    "desc": "Terrorblade transforms into a powerful demon with a ranged attack. Any of Terrorblade's illusions that are within 1200 range will also be transformed by Metamorphosis.",
    "behavior": [
      "No Target",
      "Instant Cast"
    ],
    "dmg_type": "Physical",
    "cd": [
      "155",
      "150",
      "145",
      "140"
    ],
    "mc": "100"
  },
  "dark_willow_cursed_crown": {
    "dname": "Cursed Crown",
    "img": "/apps/dota2/images/dota_react/abilities/dark_willow_cursed_crown.png",
    "desc": "Dark Willow casts an ancient fae curse on the target. After a delay, the target and nearby enemies are stunned.",
    "behavior": "Unit Target",
    "bkbpierce": "No",
    "cd": [
      "17",
      "15",
      "13",
      "11"
    ],
    "mc": [
      "80",
      "90",
      "100",
      "110"
    ]
  },
  "elder_titan_return_spirit": {
    "dname": "Return Astral Spirit",
    "img": "/apps/dota2/images/dota_react/abilities/elder_titan_return_spirit.png",
    "desc": "Returns the Astral Spirit to Elder Titan.",
    "behavior": [
      "Instant Cast",
      "No Target",
      "Hidden"
    ],
    "cd": "0"
  },
  "skeleton_king_reincarnation": {
    "dname": "Reincarnation",
    "img": "/apps/dota2/images/dota_react/abilities/skeleton_king_reincarnation.png",
    "desc": "Wraith King's form regroups after death, allowing him to resurrect when killed in battle. Upon death, enemy units in a 600 radius are slowed. Can be self-cast to kill Wraith King instantly.",
    "behavior": "Unit Target",
    "bkbpierce": "No",
    "cd": [
      "180",
      "150",
      "120"
    ],
    "mc": "225"
  },
  "void_spirit_intrinsic_edge": {
    "dname": "Intrinsic Edge",
    "img": "/apps/dota2/images/dota_react/abilities/void_spirit_intrinsic_edge.png",
    "desc": "Void Spirit gains 25% more HP regen from Strength, armor from Agility, and mana regen and magic resistance from Intelligence.",
    "behavior": "Passive"
  },
  "templar_assassin_third_eye": {
    "dname": "Third Eye",
    "img": "/apps/dota2/images/dota_react/abilities/templar_assassin_third_eye.png",
    "desc": "Templar Assassin and her teammates can see Roshan's respawn timer.",
    "behavior": "Passive"
  },
  "skywrath_mage_mystic_flare": {
    "dname": "Mystic Flare",
    "img": "/apps/dota2/images/dota_react/abilities/skywrath_mage_mystic_flare.png",
    "desc": "Skywrath Mage uses his ultimate magical ability to conjure a precise and violent mystical field that lays waste to his adversaries. Deals massive damage distributed evenly among any Heroes in the area over 2 seconds.",
    "behavior": [
      "Point Target",
      "AOE"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "60",
      "40",
      "20"
    ],
    "mc": [
      "300",
      "550",
      "800"
    ],
    "dmg": [
      "800",
      "1200",
      "1600"
    ]
  },
  "largo_amphibian_rhapsody": {
    "dname": "Amphibian Rhapsody",
    "img": "/apps/dota2/images/dota_react/abilities/largo_amphibian_rhapsody.png",
    "desc": "Largo gets ready to groove. He is disarmed and his ability bar switches to 3 song abilities, each with different effects. Songs are only effective if strummed on the beat.\n\nEvery time he strums successfully, he gains a stack of Groovin'. Each stack gives him bonus armor and reduces the mana cost of every song, but he loses a stack if he misses a beat. Stacks linger for a short duration when Largo's song ends.",
    "behavior": [
      "No Target",
      "Instant Cast"
    ],
    "dmg_type": "Magical",
    "cd": "2",
    "mc": "0"
  },
  "spirit_breaker_nether_strike": {
    "dname": "Nether Strike",
    "img": "/apps/dota2/images/dota_react/abilities/spirit_breaker_nether_strike.png",
    "desc": "Spirit Breaker slips into the nether realm, reappearing next to his hapless victim. Upon reappearing, a Greater Bash of the current level occurs and deals bonus damage. Knocks back for double the normal distance.",
    "behavior": "Unit Target",
    "dmg_type": "Magical",
    "bkbpierce": "Yes",
    "cd": [
      "75",
      "55",
      "35"
    ],
    "mc": [
      "125",
      "150",
      "175"
    ]
  },
  "phantom_assassin_blur": {
    "dname": "Blur",
    "img": "/apps/dota2/images/dota_react/abilities/phantom_assassin_blur.png",
    "desc": "Phantom Assassin blurs her body, disjointing incoming projectiles, increasing her movement speed, causing her to be impossible to see until she comes near enemy heroes or towers.",
    "behavior": "No Target",
    "cd": "45",
    "mc": "50"
  },
  "antimage_mana_break": {
    "dname": "Mana Break",
    "img": "/apps/dota2/images/dota_react/abilities/antimage_mana_break.png",
    "desc": "Burns an opponent's mana on each attack and deals damage equal to a percentage of the mana burnt.",
    "behavior": "Passive",
    "dmg_type": "Physical",
    "bkbpierce": "No"
  },
  "visage_silent_as_the_grave": {
    "dname": "Silent as the Grave",
    "img": "/apps/dota2/images/dota_react/abilities/visage_silent_as_the_grave.png",
    "desc": "Turns Visage and familiars invisible, granting Visage bonus movement speed and upgrading its movement type to flying. When Visage or its familiars leave invisibility they deal more damage for a short duration. Lasts 30 seconds. Invisibility ends when attacking or casting.",
    "behavior": [
      "Hidden",
      "No Target",
      "Instant Cast"
    ],
    "bkbpierce": "No",
    "cd": "45",
    "mc": "115"
  },
  "dragon_knight_breathe_fire": {
    "dname": "Breathe Fire",
    "img": "/apps/dota2/images/dota_react/abilities/dragon_knight_breathe_fire.png",
    "desc": "Unleashes a breath of fire in front of Dragon Knight that burns enemies and reduces the damage their attacks deal.",
    "behavior": [
      "Point Target",
      "Unit Target"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "14",
      "13",
      "12",
      "11"
    ],
    "mc": [
      "90",
      "95",
      "100",
      "105"
    ],
    "dmg": [
      "80",
      "160",
      "240",
      "320"
    ]
  },
  "kunkka_x_marks_the_spot": {
    "dname": "X Marks the Spot",
    "img": "/apps/dota2/images/dota_react/abilities/kunkka_x_marks_the_spot.png",
    "desc": "Targets a friendly or enemy Hero, marks their position with an X, and returns them to it after several seconds. Kunkka can trigger the return at any time during the duration. Lasts twice as long on allied heroes.",
    "behavior": "Unit Target",
    "bkbpierce": "No",
    "cd": [
      "24",
      "20",
      "16",
      "12"
    ],
    "mc": "50"
  },
  "furion_sprout": {
    "dname": "Sprout",
    "img": "/apps/dota2/images/dota_react/abilities/furion_sprout.png",
    "desc": "Sprouts a ring of trees around a unit, damaging and trapping it in place and providing vision in a 250 radius.",
    "behavior": [
      "Unit Target",
      "Point Target"
    ],
    "dmg_type": "Magical",
    "cd": [
      "14",
      "12",
      "10",
      "8"
    ],
    "mc": [
      "70",
      "80",
      "90",
      "100"
    ],
    "dmg": [
      "70",
      "130",
      "190",
      "250"
    ]
  },
  "bane_enfeeble": {
    "dname": "Enfeeble",
    "img": "/apps/dota2/images/dota_react/abilities/bane_enfeeble.png",
    "desc": "Deals damage every second and lowers the enemy's total attack damage and cast range.",
    "behavior": "Unit Target",
    "dmg_type": "Pure",
    "bkbpierce": "No",
    "cd": [
      "22",
      "17",
      "12",
      "7"
    ],
    "mc": [
      "100",
      "110",
      "120",
      "130"
    ],
    "dmg": [
      "12",
      "18",
      "24",
      "30"
    ]
  },
  "ringmaster_tame_the_beasts_crack": {
    "dname": "Crack",
    "img": "/apps/dota2/images/dota_react/abilities/ringmaster_tame_the_beasts_crack.png",
    "desc": "*CRACK*",
    "behavior": [
      "No Target",
      "Instant Cast",
      "Hidden"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": "0.5",
    "mc": "0"
  },
  "spectre_desolate": {
    "dname": "Desolate",
    "img": "/apps/dota2/images/dota_react/abilities/spectre_desolate.png",
    "desc": "Spectre and her illusions deal bonus Pure damage if attacking an enemy that does not have any allied units within a 350 radius around them.",
    "behavior": [
      "Passive",
      "Hidden"
    ],
    "dmg_type": "Pure",
    "bkbpierce": "Yes",
    "dmg": "25"
  },
  "phantom_assassin_immaterial": {
    "dname": "Immaterial",
    "img": "/apps/dota2/images/dota_react/abilities/phantom_assassin_immaterial.png",
    "desc": "Phantom Assassin focuses inward, increasing her ability to evade enemy attacks. Evasion improves with Phantom Assassin's levels. \n\nStacks diminishingly with other sources of Evasion.",
    "behavior": "Passive"
  },
  "death_prophet_spirit_siphon": {
    "dname": "Spirit Siphon",
    "img": "/apps/dota2/images/dota_react/abilities/death_prophet_spirit_siphon.png",
    "desc": "Creates a spirit link between Death Prophet and an enemy unit, draining health from the enemy.",
    "behavior": "Unit Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": "0",
    "mc": "80",
    "dmg": [
      "25",
      "50",
      "75",
      "100"
    ]
  },
  "wisp_spirits_in": {
    "dname": "Spirits In",
    "img": "/apps/dota2/images/dota_react/abilities/wisp_spirits_in.png",
    "desc": "Sends the spirits closer to you. Can be toggled on and off.",
    "behavior": [
      "Instant Cast",
      "Hidden"
    ],
    "cd": "0"
  },
  "phoenix_sun_ray": {
    "dname": "Sun Ray",
    "img": "/apps/dota2/images/dota_react/abilities/phoenix_sun_ray.png",
    "desc": "Phoenix expels a beam of light at the cost of its own health. The beam damages enemies and heals allies for a base amount plus a percentage of their health. The percentage increases as the beam continues to fire.",
    "behavior": "Point Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": "30",
    "mc": [
      "100",
      "110",
      "120",
      "130"
    ]
  },
  "tusk_walrus_punch": {
    "dname": "Walrus PUNCH!",
    "img": "/apps/dota2/images/dota_react/abilities/tusk_walrus_punch.png",
    "desc": "Tusk connects with his mighty Walrus Punch, a critical strike with bonus damage so powerful it launches its victim into the air.",
    "behavior": [
      "Unit Target",
      "Autocast",
      "Attack Modifier"
    ],
    "bkbpierce": "Yes",
    "cd": [
      "16",
      "13",
      "10"
    ],
    "mc": "75"
  },
  "hoodwink_scurry": {
    "dname": "Scurry",
    "img": "/apps/dota2/images/dota_react/abilities/hoodwink_scurry.png",
    "desc": "Hoodwink gains bonus movement speed, phased movement, and tree-walking for a brief time. All sources of evasion are doubled for the duration.",
    "behavior": [
      "No Target",
      "Instant Cast"
    ],
    "cd": "0",
    "mc": "35"
  },
  "brewmaster_cinder_brew": {
    "dname": "Cinder Brew",
    "img": "/apps/dota2/images/dota_react/abilities/brewmaster_cinder_brew.png",
    "desc": "Rolls a barrel of ale at enemies that damages enemies along its path and spills out at the target location.\n\nAny enemy in the path or the spill area is drenched in cinder brew, becoming slowed. If the enemy receives Magic or Pure damage, they will be ignited, extending the duration by 3s and causing them to take damage over time.",
    "behavior": [
      "Point Target",
      "AOE"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "19",
      "17",
      "15",
      "13"
    ],
    "mc": [
      "50",
      "60",
      "70",
      "80"
    ]
  },
  "keeper_of_the_light_illuminate": {
    "dname": "Illuminate",
    "img": "/apps/dota2/images/dota_react/abilities/keeper_of_the_light_illuminate.png",
    "desc": "CHANNELED - Channels light energy, building power the longer it's channeled. Once released, a wave is sent forth that deals damage and gives vision in its path. The longer it is channeled, the more damage is dealt.",
    "behavior": [
      "Point Target",
      "Channeled"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": "13",
    "mc": [
      "100",
      "125",
      "150",
      "175"
    ]
  },
  "muerta_pierce_the_veil": {
    "dname": "Pierce the Veil",
    "img": "/apps/dota2/images/dota_react/abilities/muerta_pierce_the_veil.png",
    "behavior": "No Target",
    "dmg_type": "Magical",
    "cd": [
      "75",
      "60",
      "45"
    ],
    "mc": [
      "150",
      "250",
      "350"
    ]
  },
  "pangolier_rollup": {
    "dname": "Roll Up",
    "img": "/apps/dota2/images/dota_react/abilities/pangolier_rollup.png",
    "desc": "Pangolier curls into an immobile protective ball, gaining debuff immunity, 60% magic resistance, and allowing him to turn. Can be cast during Rolling Thunder to temporarily hit the brakes. Can cast Rolling Thunder and Shield Crash during Roll Up. If enemies attack Pangolier during this, he will roll away from the attacker, applying Rolling Thunder damage/stun if there are enemies in the way.",
    "behavior": [
      "No Target",
      "Hidden"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": "40",
    "mc": "50"
  },
  "crystal_maiden_brilliance_aura": {
    "dname": "Arcane Aura",
    "img": "/apps/dota2/images/dota_react/abilities/crystal_maiden_brilliance_aura.png",
    "desc": "Gives additional mana regeneration to all friendly units on the map. Allies within a 1200 radius of Crystal Maiden receive 3x the mana regeneration.",
    "behavior": "Passive",
    "bkbpierce": "Yes"
  },
  "jakiro_dual_breath": {
    "dname": "Dual Breath",
    "img": "/apps/dota2/images/dota_react/abilities/jakiro_dual_breath.png",
    "desc": "An icy blast followed by a wave of fire launches out in a path in front of Jakiro. The ice slows enemies, while the fire delivers damage over time.",
    "behavior": [
      "Point Target",
      "Unit Target"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": "10",
    "mc": [
      "135",
      "150",
      "165",
      "180"
    ],
    "dmg": "0"
  },
  "invoker_deafening_blast": {
    "dname": "Deafening Blast",
    "img": "/apps/dota2/images/dota_react/abilities/invoker_deafening_blast.png",
    "desc": "Invoker unleashes a mighty sonic wave in front of him, dealing damage to any enemy unit it collides with based on the level of Exort. The sheer impact from the blast is enough to knock those enemy units back for a duration based on the level of Quas, then disarm their attacks for a duration based on the level of Wex.",
    "behavior": [
      "Point Target",
      "Hidden"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": "36",
    "mc": "250"
  },
  "witch_doctor_paralyzing_cask": {
    "dname": "Paralyzing Cask",
    "img": "/apps/dota2/images/dota_react/abilities/witch_doctor_paralyzing_cask.png",
    "desc": "Launches a cask of paralyzing powder that ricochets between enemy units, stunning and damaging those it hits. Damage increases each bounce.",
    "behavior": "Unit Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "20",
      "18",
      "16",
      "14"
    ],
    "mc": [
      "80",
      "100",
      "120",
      "140"
    ]
  },
  "ogre_magi_bloodlust": {
    "dname": "Bloodlust",
    "img": "/apps/dota2/images/dota_react/abilities/ogre_magi_bloodlust.png",
    "desc": "Incites a frenzy in a friendly unit, increasing its movement speed and attack speed. Gives bonus attacks speed if cast on Ogre himself. Can be cast on towers.",
    "behavior": [
      "Unit Target",
      "Autocast"
    ],
    "bkbpierce": "Yes",
    "cd": [
      "20",
      "18",
      "16",
      "14"
    ],
    "mc": [
      "40",
      "50",
      "60",
      "70"
    ]
  },
  "meepo_sticky_fingers": {
    "dname": "Sticky Fingers",
    "img": "/apps/dota2/images/dota_react/abilities/meepo_sticky_fingers.png",
    "desc": "Has an extra choice of neutral item to select from.",
    "behavior": "Passive"
  },
  "vengefulspirit_retribution": {
    "dname": "Retribution",
    "img": "/apps/dota2/images/dota_react/abilities/vengefulspirit_retribution.png",
    "desc": "Whenever an enemy hero kills Vengeful Spirit, they get a debuff until their next death, causing Vengeful Spirit to deal 20% bonus damage to them.",
    "behavior": "Passive"
  },
  "ember_spirit_fire_remnant": {
    "dname": "Fire Remnant",
    "img": "/apps/dota2/images/dota_react/abilities/ember_spirit_fire_remnant.png",
    "desc": "Sends a Fire Remnant that runs to the target location at 250% Ember Spirit's speed. Using Activate Fire Remnant, Ember Spirit will dash out to all active Fire Remnants, destroying them and dealing damage in an area and then moving to the nearest Remnant. Ember Spirit will end at the Remnant closest to the targeted location.",
    "behavior": "Point Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": "0.5",
    "mc": "0",
    "dmg": [
      "100",
      "200",
      "300"
    ]
  },
  "nevermore_requiem": {
    "dname": "Requiem of Souls",
    "img": "/apps/dota2/images/dota_react/abilities/nevermore_requiem.png",
    "desc": "Shadow Fiend gathers his captured souls to release them as lines of demonic energy. Units near Shadow Fiend when the souls are released can be damaged by several lines of energy. Any unit damaged by Requiem of Souls will be feared and have its movement speed and magic resistance reduced for 0.6 seconds for each line hit up to a maximum of 2.15. Lines of energy are created for every soul captured through Necromastery. \n\n Requiem of Souls is automatically cast whenever Shadow Fiend dies, regardless of its cooldown.",
    "behavior": "No Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "120",
      "110",
      "100"
    ],
    "mc": [
      "150",
      "175",
      "200"
    ],
    "dmg": [
      "80",
      "120",
      "160"
    ]
  },
  "tusk_launch_snowball": {
    "dname": "Launch Snowball",
    "img": "/apps/dota2/images/dota_react/abilities/tusk_launch_snowball.png",
    "desc": "Launch the snowball toward the target.",
    "behavior": [
      "Hidden",
      "No Target",
      "Instant Cast"
    ]
  },
  "troll_warlord_battle_trance": {
    "dname": "Battle Trance",
    "img": "/apps/dota2/images/dota_react/abilities/troll_warlord_battle_trance.png",
    "desc": "Troll unleashes a powerful battle trance, that forces you to continuously attack the closest enemy unit within 900 range, prioritizing heroes. Damage does not kill you during this mode. Grants you bonus lifesteal, attack speed and movement speed. Applies a Basic Dispel.\n\nDISPEL TYPE: Basic Dispel",
    "cd": [
      "90",
      "80",
      "70"
    ],
    "mc": "150"
  },
  "naga_siren_ensnare": {
    "dname": "Ensnare",
    "img": "/apps/dota2/images/dota_react/abilities/naga_siren_ensnare.png",
    "desc": "Interrupts the target and traps them in place, preventing movement or blinking. Can target units affected by Song of the Siren.",
    "behavior": "Unit Target",
    "bkbpierce": "No",
    "cd": [
      "21",
      "18",
      "15",
      "12"
    ],
    "mc": [
      "70",
      "80",
      "90",
      "100"
    ]
  },
  "void_spirit_resonant_pulse": {
    "dname": "Resonant Pulse",
    "img": "/apps/dota2/images/dota_react/abilities/void_spirit_resonant_pulse.png",
    "desc": "Void Spirit wraps himself in a protective shield that absorbs physical damage and emits a single damaging pulse around him. The shield gains increased damage absorption for each enemy hero the pulse hits.",
    "behavior": "No Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": "18",
    "mc": [
      "115",
      "120",
      "125",
      "130"
    ],
    "dmg": [
      "60",
      "110",
      "160",
      "210"
    ]
  },
  "centaur_rawhide": {
    "dname": "Rawhide",
    "img": "/apps/dota2/images/dota_react/abilities/centaur_rawhide.png",
    "desc": "Permanently gain 25 max health every 120s.",
    "behavior": [
      "Passive",
      "Hidden"
    ]
  },
  "dark_willow_terrorize": {
    "dname": "Terrorize",
    "img": "/apps/dota2/images/dota_react/abilities/dark_willow_terrorize.png",
    "desc": "Dark Willow releases her pet wisp to terrorize her enemies. After a short delay, all enemies in the target area become fearful and run toward their home fountain. Terrorize cannot be used while Bedlam is active.",
    "behavior": [
      "Point Target",
      "AOE"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "100",
      "90",
      "80"
    ],
    "mc": "150"
  },
  "oracle_rain_of_destiny": {
    "dname": "Rain of Destiny",
    "img": "/apps/dota2/images/dota_react/abilities/oracle_rain_of_destiny.png",
    "desc": "Brings forth rain to the target area. Enemies standing in the area receive damage and have reduced Heal Amplification. Allies in the area heal and have increased incoming Heal Amplification.",
    "behavior": [
      "Point Target",
      "AOE"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": "40",
    "mc": "150"
  },
  "doom_bringer_devour": {
    "dname": "Devour",
    "img": "/apps/dota2/images/dota_react/abilities/doom_bringer_devour.png",
    "desc": "Consumes an enemy or neutral creep, acquiring any special abilities that it possessed. If alt-cast is deactivated, Doom will not acquire the creep's abilities. Duration is equal to the cooldown.",
    "behavior": "Unit Target",
    "cd": "70",
    "mc": [
      "40",
      "50",
      "60",
      "70"
    ]
  },
  "riki_tricks_of_the_trade": {
    "dname": "Tricks of the Trade",
    "img": "/apps/dota2/images/dota_react/abilities/riki_tricks_of_the_trade.png",
    "desc": "CHANNELED - Riki phases out of the world and periodically strikes 2 random enemy units from behind in an area around him. He has fixed attack damage while phased out.",
    "behavior": [
      "Point Target",
      "AOE",
      "Channeled"
    ],
    "dmg_type": "Physical",
    "bkbpierce": "Yes",
    "cd": [
      "21",
      "18",
      "15",
      "12"
    ],
    "mc": "65"
  },
  "leshrac_diabolic_edict": {
    "dname": "Diabolic Edict",
    "img": "/apps/dota2/images/dota_react/abilities/leshrac_diabolic_edict.png",
    "desc": "Saturates the area around Leshrac with magical explosions that deal pure damage to enemy units and buildings. The fewer units available to attack, the more damage those units will take.",
    "behavior": "No Target",
    "dmg_type": "Pure",
    "bkbpierce": "Yes",
    "cd": [
      "22",
      "21",
      "20",
      "19"
    ],
    "mc": [
      "90",
      "120",
      "150",
      "180"
    ]
  },
  "brewmaster_liquid_courage": {
    "dname": "Liquid Courage",
    "img": "/apps/dota2/images/dota_react/abilities/brewmaster_liquid_courage.png",
    "desc": "When Brewmaster drops below 50% Health he gains a Status Resistance buff and his movement speed alternates every 1s between being faster and being slower. The effect becomes stronger at lower health, scaling from 0 up to max values at 20% Health.",
    "behavior": "Passive",
    "cd": "0",
    "mc": "0"
  },
  "kez_shodo_sai_parry_cancel": {
    "dname": "Cancel",
    "img": "/apps/dota2/images/dota_react/abilities/kez_shodo_sai_parry_cancel.png",
    "desc": "Stop blocking physical attacks.",
    "behavior": [
      "No Target",
      "Instant Cast",
      "Hidden"
    ],
    "cd": "0"
  },
  "morphling_waveform": {
    "dname": "Waveform",
    "img": "/apps/dota2/images/dota_react/abilities/morphling_waveform.png",
    "desc": "Morphling dissolves into liquid and surges forward, damaging enemy units in his path. Morphling is invulnerable during Waveform.",
    "behavior": "Point Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "21",
      "18",
      "15",
      "12"
    ],
    "mc": "115",
    "dmg": [
      "75",
      "150",
      "225",
      "300"
    ]
  },
  "nyx_assassin_spiked_carapace": {
    "dname": "Spiked Carapace",
    "img": "/apps/dota2/images/dota_react/abilities/nyx_assassin_spiked_carapace.png",
    "desc": "When activated while above ground, Spiked Carapace reflects and negates damage dealt to Nyx Assassin (max once from each source), as well as stunning the source of the damage. Activating Spiked Carapace will not break Vendetta invisibility.\n\nWhile Burrowed, Spiked Carapace instantly stuns nearby enemies when cast.",
    "behavior": [
      "No Target",
      "Instant Cast"
    ],
    "bkbpierce": "No",
    "cd": [
      "20",
      "16",
      "12",
      "8"
    ],
    "mc": "40"
  },
  "meepo_earthbind": {
    "dname": "Earthbind",
    "img": "/apps/dota2/images/dota_react/abilities/meepo_earthbind.png",
    "desc": "Tosses a net at the target point, rooting down all enemy units in an area around it.",
    "behavior": [
      "AOE",
      "Point Target"
    ],
    "bkbpierce": "No",
    "cd": [
      "16",
      "14",
      "12",
      "10"
    ],
    "mc": [
      "70",
      "80",
      "90",
      "100"
    ]
  },
  "morphling_morph_agi": {
    "dname": "Attribute Shift (Agility Gain)",
    "img": "/apps/dota2/images/dota_react/abilities/morphling_morph_agi.png",
    "desc": "Morphling shifts its form, pulling points from Strength and pouring them into Agility. The process is reversible. Additional points in Attribute Shift increase the rate of stat change.",
    "behavior": "No Target",
    "cd": "0"
  },
  "earthshaker_echo_slam": {
    "dname": "Echo Slam",
    "img": "/apps/dota2/images/dota_react/abilities/earthshaker_echo_slam.png",
    "desc": "Shockwaves travel through the ground, damaging enemy units. Each enemy hit causes an echo to damage nearby units. Real heroes cause two echoes.",
    "behavior": "No Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "130",
      "120",
      "110"
    ],
    "mc": [
      "150",
      "200",
      "250"
    ]
  },
  "storm_spirit_galvanized": {
    "dname": "Galvanized",
    "img": "/apps/dota2/images/dota_react/abilities/storm_spirit_galvanized.png",
    "desc": "Storm Spirit gains a charge of 0.2 mana regeneration per kill. Loses 2 charges per death. Leveling Ball Lightning gives Storm Spirit 3 bonus charges. Additionally every time he gains a charge he also gains 0.1 Mana Regen permanently.",
    "behavior": "Passive"
  },
  "magnataur_skewer": {
    "dname": "Skewer",
    "img": "/apps/dota2/images/dota_react/abilities/magnataur_skewer.png",
    "desc": "Magnus rushes forward, goring enemy units on his massive tusk. Heroes hit on the way will be dragged to the destination, then damaged and affected by slowed movement speed. The damage is increased based on distance traveled.",
    "behavior": "Point Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "22",
      "20",
      "18",
      "16"
    ],
    "mc": "80",
    "dmg": [
      "80",
      "160",
      "240",
      "320"
    ]
  },
  "lich_chain_frost": {
    "dname": "Chain Frost",
    "img": "/apps/dota2/images/dota_react/abilities/lich_chain_frost.png",
    "desc": "Releases an orb of frost that bounces between nearby enemy units up to 10 times, slowing and damaging each time it hits. Each bounce increases the damage for the subsequent bounces. Chain Frost lingers on its last target if it fails to bounce and can bounce again if new targets become available.",
    "behavior": "Unit Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "100",
      "80",
      "60"
    ],
    "mc": [
      "180",
      "300",
      "420"
    ]
  },
  "night_stalker_hunter_in_the_night": {
    "dname": "Hunter in the Night",
    "img": "/apps/dota2/images/dota_react/abilities/night_stalker_hunter_in_the_night.png",
    "desc": "Night Stalker is in his element at night, attacking and moving with great swiftness.",
    "behavior": "Passive",
    "mc": "undefined"
  },
  "huskar_inner_fire": {
    "dname": "Inner Fire",
    "img": "/apps/dota2/images/dota_react/abilities/huskar_inner_fire.png",
    "desc": "In a fiery rage, knocks all nearby enemies away from you to a fixed distance, dealing damage and silencing them.",
    "behavior": "No Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "17",
      "15",
      "13",
      "11"
    ],
    "dmg": [
      "105",
      "170",
      "235",
      "300"
    ]
  },
  "faceless_void_time_dilation": {
    "dname": "Time Dilation",
    "img": "/apps/dota2/images/dota_react/abilities/faceless_void_time_dilation.png",
    "desc": "Faceless Void traps all nearby enemies in a time dilation field for 7 seconds, extending their cooldowns and slowing their movement and attack speed by 4%, amplified by each cooldown extended. Deals bonus damage per second for each cooldown.",
    "behavior": "No Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "28",
      "24",
      "20",
      "16"
    ],
    "mc": "90"
  },
  "medusa_gorgon_grasp": {
    "dname": "Gorgon's Grasp",
    "img": "/apps/dota2/images/dota_react/abilities/medusa_gorgon_grasp.png",
    "desc": "Medusa fires arrows in a line that land in 3 groups, with each grouping larger than the previous. Enemies struck by a volley of arrows take an initial burst of damage and then are rooted, cannot turn, are revealed to the enemy, and take damage per second.",
    "behavior": [
      "AOE",
      "Point Target"
    ],
    "dmg_type": "Physical",
    "bkbpierce": "No",
    "cd": [
      "30",
      "27",
      "24",
      "21"
    ],
    "mc": [
      "65",
      "85",
      "105",
      "125"
    ],
    "dmg": [
      "30",
      "70",
      "110",
      "150"
    ]
  },
  "skywrath_mage_ancient_seal": {
    "dname": "Ancient Seal",
    "img": "/apps/dota2/images/dota_react/abilities/skywrath_mage_ancient_seal.png",
    "desc": "Skywrath Mage seals the targeted unit with an ancient rune, silencing it and causing it to take additional damage from spells.",
    "behavior": "Unit Target",
    "bkbpierce": "No",
    "cd": "14",
    "mc": [
      "80",
      "90",
      "100",
      "110"
    ]
  },
  "lycan_wolf_bite": {
    "dname": "Wolf Bite",
    "img": "/apps/dota2/images/dota_react/abilities/lycan_wolf_bite.png",
    "desc": "Lycan bites an allied hero or creep-hero, granting them Shapeshift properties. Lycan and the bitten target gain 40% Lifesteal and share the healing effect of Lifesteal with each other as long as they are within 1200 range of each other.",
    "behavior": [
      "Unit Target",
      "Hidden"
    ],
    "bkbpierce": "Yes",
    "cd": [
      "110",
      "100",
      "90"
    ],
    "mc": "150"
  },
  "windrunner_shackleshot": {
    "dname": "Shackleshot",
    "img": "/apps/dota2/images/dota_react/abilities/windrunner_shackleshot.png",
    "desc": "Shackles the target to an enemy unit or tree in a line directly behind it. If no unit or tree is present, the stun duration is reduced to 0.6.",
    "behavior": "Unit Target",
    "dmg_type": "Physical",
    "bkbpierce": "No",
    "cd": [
      "16",
      "14",
      "12",
      "10"
    ],
    "mc": [
      "70",
      "80",
      "90",
      "100"
    ],
    "dmg": "0"
  },
  "obsidian_destroyer_sanity_eclipse": {
    "dname": "Sanity's Eclipse",
    "img": "/apps/dota2/images/dota_react/abilities/obsidian_destroyer_sanity_eclipse.png",
    "desc": "Unleashes a psychic blast that deals damage to enemies based on the difference between your mana and the target's mana. Sanity's Eclipse can hit units trapped by Astral Imprisonment. Deals bonus damage to illusions.",
    "behavior": [
      "Point Target",
      "AOE"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "150",
      "135",
      "120"
    ],
    "mc": [
      "200",
      "300",
      "400"
    ]
  },
  "monkey_king_boundless_strike": {
    "dname": "Boundless Strike",
    "img": "/apps/dota2/images/dota_react/abilities/monkey_king_boundless_strike.png",
    "desc": "Monkey King enlarges his staff and slams it against the ground, stunning enemies in a line and damaging them with bonus damage and a critical hit based on his attack. Has True Strike.",
    "behavior": "Point Target",
    "dmg_type": "Physical",
    "bkbpierce": "No",
    "cd": [
      "24",
      "21",
      "18",
      "15"
    ],
    "mc": [
      "85",
      "90",
      "95",
      "100"
    ]
  },
  "necrolyte_death_pulse": {
    "dname": "Death Pulse",
    "img": "/apps/dota2/images/dota_react/abilities/necrolyte_death_pulse.png",
    "desc": "Necrophos releases a wave of death around him, dealing damage to enemy units and healing allied units.",
    "behavior": "No Target",
    "dmg_type": "Magical",
    "cd": [
      "8",
      "7",
      "6",
      "5"
    ],
    "mc": [
      "115",
      "130",
      "145",
      "160"
    ],
    "dmg": [
      "100",
      "160",
      "220",
      "280"
    ]
  },
  "alchemist_corrosive_weaponry": {
    "dname": "Corrosive Weaponry",
    "img": "/apps/dota2/images/dota_react/abilities/alchemist_corrosive_weaponry.png",
    "desc": "Alchemist coats his weapons and empowers his spells with an acid that applies a stacking slow and base attack damage reduction to enemies hit.\n\nAttacks apply 2 stacks. Unstable Concoction applies 1 stack per second of brew time.",
    "behavior": "Passive",
    "bkbpierce": "No"
  },
  "lina_combustion": {
    "dname": "Combustion",
    "img": "/apps/dota2/images/dota_react/abilities/lina_combustion.png",
    "desc": "Every 175 damage Lina does to an enemy hero causes them to overheat, doing damage to their nearby allies. This effect can trigger multiple times off a single instance of damage. Overheated illusions do less damage.",
    "behavior": "Passive",
    "dmg_type": "Magical"
  },
  "abaddon_frostmourne": {
    "dname": "Curse of Avernus",
    "img": "/apps/dota2/images/dota_react/abilities/abaddon_frostmourne.png",
    "desc": "Abaddon strikes an enemy, affecting them by a chilling curse, slowing them, causing them to take damage over time, and all attacks against them gain an attack speed boost. Damage over time component to buildings is reduced by 100%.",
    "behavior": "Passive",
    "dmg_type": "Magical",
    "bkbpierce": "No"
  },
  "tusk_walrus_kick": {
    "dname": "Walrus Kick",
    "img": "/apps/dota2/images/dota_react/abilities/tusk_walrus_kick.png",
    "desc": "Kicks the closest enemy unit in the drawn direction, stunning, damaging, and slowing them. Also deals damage to all heroes within 250 radius of its landing area. Cooldown is reduced by 50% if kicking a creep.",
    "behavior": [
      "Unit Target",
      "Hidden"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "Yes",
    "cd": "12",
    "mc": "100",
    "dmg": "550"
  },
  "alchemist_chemical_rage": {
    "dname": "Chemical Rage",
    "img": "/apps/dota2/images/dota_react/abilities/alchemist_chemical_rage.png",
    "desc": "Alchemist causes his Ogre to enter a chemically induced rage, reducing base attack cooldown and increasing movement speed and health regeneration.\n\nDISPEL TYPE: Basic Dispel",
    "behavior": "No Target",
    "cd": "60",
    "mc": [
      "50",
      "75",
      "100"
    ]
  },
  "ursa_maul": {
    "dname": "Maul",
    "img": "/apps/dota2/images/dota_react/abilities/ursa_maul.png",
    "desc": "Ursa gains bonus damage equal to a percentage of his Current HP.",
    "behavior": "Passive"
  },
  "invoker_empty2": {
    "dname": "Invoked Spell",
    "img": "/apps/dota2/images/dota_react/abilities/invoker_empty2.png",
    "desc": "Casting Invoke will replace this slot with one of ten unique spells based on Invoker's currently active Quas, Wex, and Exort buffs.",
    "behavior": "Passive"
  },
  "antimage_persectur": {
    "dname": "Persecutor",
    "img": "/apps/dota2/images/dota_react/abilities/antimage_persectur.png",
    "desc": "Attacks slow enemies based on how much mana they are missing. Min slow at 50% mana, up to max slow at 0% mana. No effect if enemy is above 50% mana.",
    "behavior": "Passive",
    "bkbpierce": "No"
  },
  "faceless_void_time_walk_reverse": {
    "dname": "Reverse Time Walk",
    "img": "/apps/dota2/images/dota_react/abilities/faceless_void_time_walk_reverse.png",
    "desc": "Available for 1.5 seconds after landing Time Walk. If used in this period, you will reverse your time walk back to your previous cast location. Does not affect health or proc scepter hits.",
    "behavior": [
      "No Target",
      "Hidden"
    ],
    "bkbpierce": "Yes",
    "cd": "0.5",
    "mc": "0"
  },
  "obsidian_destroyer_equilibrium": {
    "dname": "Essence Flux",
    "img": "/apps/dota2/images/dota_react/abilities/obsidian_destroyer_equilibrium.png",
    "desc": "Passively grants a chance to restore a percentage of your max mana each time you cast an ability.",
    "behavior": "Passive"
  },
  "tusk_ice_shards": {
    "dname": "Ice Shards",
    "img": "/apps/dota2/images/dota_react/abilities/tusk_ice_shards.png",
    "desc": "Tusk compresses shards of ice into a ball of frozen energy that damages all enemies it comes in contact with. When the ball reaches its target destination the shards are released, creating a barrier that lasts for 4 seconds.",
    "behavior": "Point Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "23",
      "20",
      "17",
      "14"
    ],
    "mc": "100"
  },
  "pudge_dismember": {
    "dname": "Dismember",
    "img": "/apps/dota2/images/dota_react/abilities/pudge_dismember.png",
    "desc": "CHANNELED - Pudge chows down on an enemy unit, disabling it and dealing damage over time. Damage is increased by Pudge's Strength and heals him for the total amount. Pudge pulls the unit at a rate of 75 units, up to a minimum of 125 range.",
    "behavior": [
      "Unit Target",
      "Channeled"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "Yes",
    "cd": [
      "30",
      "25",
      "20"
    ],
    "mc": [
      "100",
      "130",
      "170"
    ]
  },
  "bounty_hunter_big_game_hunter": {
    "dname": "Big Game Hunter",
    "img": "/apps/dota2/images/dota_react/abilities/bounty_hunter_big_game_hunter.png",
    "desc": "When getting a kill or assist on an enemy that has a killing streak, Bounty Hunter receives 20% extra gold.",
    "behavior": "Passive"
  },
  "lich_ice_spire": {
    "dname": "Ice Spire",
    "img": "/apps/dota2/images/dota_react/abilities/lich_ice_spire.png",
    "desc": "Creates an Ice Spire at the target spot, slowing enemies around it. Can take 4 hero hits or 8 creep hits and when destroyed it will create a Frost Blast around it.\n\nChain Frost can be cast on the Spire and can bounce to the Spire and damage the spire by 1 hero attack if there are no other enemies in range.\n\nLich can cast Frost Shield on the Spire. Each Frost Shield tick will heal the spire by 1 hero attack.",
    "behavior": [
      "Point Target",
      "AOE",
      "Hidden"
    ],
    "bkbpierce": "No",
    "cd": "25",
    "mc": "150"
  },
  "gyrocopter_rocket_barrage": {
    "dname": "Rocket Barrage",
    "img": "/apps/dota2/images/dota_react/abilities/gyrocopter_rocket_barrage.png",
    "desc": "Launches a salvo of rockets at nearby enemy units in a radius around the Gyrocopter. Lasts 3 seconds.",
    "behavior": [
      "No Target",
      "Instant Cast"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "7",
      "6.5",
      "6",
      "5.5"
    ],
    "mc": "85"
  },
  "bane_fiends_grip": {
    "dname": "Fiend's Grip",
    "img": "/apps/dota2/images/dota_react/abilities/bane_fiends_grip.png",
    "desc": "CHANNELED - Grips an enemy unit, disabling it and causing heavy damage over time, while stealing mana every 0.5 seconds based on the unit's maximum mana.",
    "behavior": [
      "Unit Target",
      "Channeled"
    ],
    "dmg_type": "Pure",
    "bkbpierce": "Yes",
    "cd": [
      "120",
      "110",
      "100"
    ],
    "mc": [
      "200",
      "300",
      "400"
    ],
    "dmg": [
      "70",
      "110",
      "150"
    ]
  },
  "jakiro_ice_path": {
    "dname": "Ice Path",
    "img": "/apps/dota2/images/dota_react/abilities/jakiro_ice_path.png",
    "desc": "Creates a path of ice that stuns and damages enemies that touch it.",
    "behavior": "Point Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "20",
      "17",
      "14",
      "11"
    ],
    "mc": "100",
    "dmg": "0"
  },
  "largo_song_fight_song": {
    "dname": "Bullbelly Blitz",
    "img": "/apps/dota2/images/dota_react/abilities/largo_song_fight_song.png",
    "desc": "Largo plays a song that increases nearby allied heroes' spell amplification and grants their attacks additional magic damage.",
    "behavior": [
      "No Target",
      "Instant Cast",
      "Hidden"
    ],
    "cd": "0.2",
    "mc": [
      "20",
      "32",
      "44"
    ]
  },
  "dark_seer_wall_of_replica": {
    "dname": "Wall of Replica",
    "img": "/apps/dota2/images/dota_react/abilities/dark_seer_wall_of_replica.png",
    "desc": "Raises a wall of warping light that slows, damages, and creates replicas of any enemy hero who crosses it. Enemy replicas serve at the Dark Seer's will. Replicas last until they are destroyed, or until the wall's duration ends.",
    "behavior": "Point Target",
    "bkbpierce": "Yes",
    "cd": "100",
    "mc": [
      "125",
      "250",
      "375"
    ],
    "dmg": [
      "25",
      "40",
      "55"
    ]
  },
  "invoker_sun_strike": {
    "dname": "Sun Strike",
    "img": "/apps/dota2/images/dota_react/abilities/invoker_sun_strike.png",
    "desc": "Sends a catastrophic ray of fierce energy from the sun at any targeted location, incinerating all enemies standing beneath it once it reaches the earth. Deals damage based on the level of Exort, however this damage is spread evenly over all enemies hit.",
    "behavior": [
      "Point Target",
      "Hidden",
      "AOE"
    ],
    "dmg_type": "Pure",
    "bkbpierce": "Yes",
    "cd": "23",
    "mc": "175"
  },
  "huskar_burning_spear": {
    "dname": "Burning Spear",
    "img": "/apps/dota2/images/dota_react/abilities/huskar_burning_spear.png",
    "desc": "Huskar sets his spears aflame, dealing damage over time with his regular attack. Multiple attacks will stack additional damage. Each attack drains some of Huskar's health.",
    "behavior": [
      "Unit Target",
      "Autocast",
      "Attack Modifier"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": "0",
    "mc": "0"
  },
  "nyx_assassin_impale": {
    "dname": "Impale",
    "img": "/apps/dota2/images/dota_react/abilities/nyx_assassin_impale.png",
    "desc": "Rock spikes burst from the earth along a straight path. Enemy units take damage, then are hurled into the air and stunned.",
    "behavior": "Point Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "17",
      "15",
      "13",
      "11"
    ],
    "mc": [
      "90",
      "100",
      "110",
      "120"
    ]
  },
  "ursa_overpower": {
    "dname": "Overpower",
    "img": "/apps/dota2/images/dota_react/abilities/ursa_overpower.png",
    "desc": "Using his skill in combat, Ursa gains increased attack speed and slow resistance for a number of subsequent attacks.",
    "behavior": "No Target",
    "cd": [
      "12",
      "11",
      "10",
      "9"
    ],
    "mc": [
      "45",
      "50",
      "55",
      "60"
    ]
  },
  "medusa_mystic_snake": {
    "dname": "Mystic Snake",
    "img": "/apps/dota2/images/dota_react/abilities/medusa_mystic_snake.png",
    "desc": "A mystic snake made of energy jumps from target to target dealing damage. Damage and speed increases with each jump. After it reaches its last target, it returns to Medusa to replenish her with mana. The snake returns a percentage of the targets' total mana.",
    "behavior": "Unit Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "15",
      "14",
      "13",
      "12"
    ],
    "mc": [
      "80",
      "100",
      "120",
      "140"
    ]
  },
  "life_stealer_ghoul_frenzy": {
    "dname": "Ghoul Frenzy",
    "img": "/apps/dota2/images/dota_react/abilities/life_stealer_ghoul_frenzy.png",
    "desc": "Passively grants Lifestealer Movement and Attack Speed.",
    "behavior": "Passive",
    "bkbpierce": "No"
  },
  "bane_ichor_of_nyctasha": {
    "dname": "Ichor of Nyctasha",
    "img": "/apps/dota2/images/dota_react/abilities/bane_ichor_of_nyctasha.png",
    "desc": "Bane's attribute gains are always evenly distributed across all three attributes (items that grant +3 Strength will now grant +1 Str/Agi/Int).",
    "behavior": "Passive"
  },
  "naga_siren_song_of_the_siren_cancel": {
    "dname": "Song of the Siren End",
    "img": "/apps/dota2/images/dota_react/abilities/naga_siren_song_of_the_siren_cancel.png",
    "desc": "Release enemy units from your song so they can be targeted again.",
    "behavior": [
      "Hidden",
      "No Target"
    ],
    "cd": "1"
  },
  "batrider_smoldering_resin": {
    "dname": "Smoldering Resin",
    "img": "/apps/dota2/images/dota_react/abilities/batrider_smoldering_resin.png",
    "desc": "Batrider's attacks apply a debuff that deals 20% of the attack damage every 1s for 2s.",
    "behavior": "Passive"
  },
  "phantom_lancer_doppelwalk": {
    "dname": "Doppelganger",
    "img": "/apps/dota2/images/dota_react/abilities/phantom_lancer_doppelwalk.png",
    "desc": "Phantom Lancer briefly vanishes from the battlefield. After 1 second, Phantom Lancer and any of his nearby illusions reappear at a random position within the targeted location, along with two additional doppelgangers. Extends duration of all illusions. The two added doppelgangers have different properties: one takes normal damage and deals none, while the other takes 500% bonus damage and deals -80% less damage.\n\nDISPEL TYPE: Basic Dispel",
    "behavior": [
      "Point Target",
      "AOE"
    ],
    "cd": [
      "22",
      "18",
      "14",
      "10"
    ],
    "mc": "50"
  },
  "earth_spirit_magnetize": {
    "dname": "Magnetize",
    "img": "/apps/dota2/images/dota_react/abilities/earth_spirit_magnetize.png",
    "desc": "Magnetizes units in a small nearby area, causing them to take damage for a short duration. Magnetized heroes cause nearby Stone Remnants to explode, destroying the remnant and refreshing Magnetize's duration on all nearby enemies. This process can repeat multiple times. If an enemy hero is affected by Geomagnetic Grip or Boulder Smash, all magnetized heroes share the effects.",
    "behavior": "No Target",
    "dmg_type": "Magical",
    "bkbpierce": "Yes",
    "cd": [
      "100",
      "90",
      "80"
    ],
    "mc": "100"
  },
  "kunkka_return": {
    "dname": "Return",
    "img": "/apps/dota2/images/dota_react/abilities/kunkka_return.png",
    "desc": "Returns the marked hero to the X.",
    "behavior": [
      "Hidden",
      "No Target"
    ],
    "bkbpierce": "No",
    "cd": "1",
    "mc": "0"
  },
  "omniknight_hammer_of_purity": {
    "dname": "Hammer of Purity",
    "img": "/apps/dota2/images/dota_react/abilities/omniknight_hammer_of_purity.png",
    "desc": "Omniknight imbues his hammer with holy power, causing his attack to have increased range, deal pure damage based on a percentage of his base damage and slow his target for a short duration.",
    "behavior": [
      "Unit Target",
      "Autocast",
      "Attack Modifier"
    ],
    "dmg_type": "Pure",
    "bkbpierce": "No",
    "cd": [
      "20",
      "15",
      "10",
      "5"
    ],
    "mc": "0",
    "dmg": "0"
  },
  "sven_great_cleave": {
    "dname": "Great Cleave",
    "img": "/apps/dota2/images/dota_react/abilities/sven_great_cleave.png",
    "desc": "Sven strikes with great force, cleaving all nearby enemy units with his attack.",
    "behavior": "Passive",
    "bkbpierce": "Yes"
  },
  "tidehunter_blubber": {
    "dname": "Blubber",
    "img": "/apps/dota2/images/dota_react/abilities/tidehunter_blubber.png",
    "desc": "Tidehunter's hide removes negative status effects if he takes more than 450 damage. Removes most debuffs, even if they are generally not purgable.\n\nDISPEL TYPE: Strong Dispel",
    "behavior": "Passive"
  },
  "batrider_sticky_napalm_application_damage": {
    "dname": "APPLICATION DAMAGE:",
    "img": "/apps/dota2/images/dota_react/abilities/batrider_sticky_napalm_application_damage.png",
    "behavior": "Hidden",
    "bkbpierce": "No"
  },
  "oracle_fates_edict": {
    "dname": "Fate's Edict",
    "img": "/apps/dota2/images/dota_react/abilities/oracle_fates_edict.png",
    "desc": "Oracle enraptures a target, disarming them and granting them 100% magic damage resistance.",
    "behavior": "Unit Target",
    "bkbpierce": "No",
    "cd": [
      "17",
      "14",
      "11",
      "8"
    ],
    "mc": "70"
  },
  "kez_shodo_sai": {
    "dname": "Shodo Sai",
    "img": "/apps/dota2/images/dota_react/abilities/kez_shodo_sai.png",
    "desc": "Kez's attacks and abilities with the Sai have a chance to Mark enemies. The next attack or ability damage from Kez will stun the enemy and deal a critical strike, consuming the buff.\n\nKez may activate the ability to disarm himself, lock his facing, and parry attacks and attack effects from the targeted direction for 2 seconds. If an attack is parried from an enemy Hero in this way, that Hero is stunned and gains a stronger Mark that stuns for longer and deals 4% * Target Hero Level bonus critical strike.\n\nThe sub-ability may be used to cancel the blocking early.",
    "behavior": [
      "Hidden",
      "Point Target",
      "Instant Cast"
    ],
    "bkbpierce": "Yes",
    "cd": [
      "20",
      "15",
      "10",
      "5"
    ],
    "mc": [
      "30",
      "20",
      "10",
      "0"
    ]
  },
  "huskar_berserkers_blood": {
    "dname": "Berserker's Blood",
    "img": "/apps/dota2/images/dota_react/abilities/huskar_berserkers_blood.png",
    "desc": "Huskar's injuries feed his power, giving increased attack speed, magic resistance and health regen based on missing health. Health regen is a percentage of your strength.",
    "behavior": "Passive"
  },
  "dark_seer_ion_shell": {
    "dname": "Ion Shell",
    "img": "/apps/dota2/images/dota_react/abilities/dark_seer_ion_shell.png",
    "desc": "Surrounds the target unit with a bristling shield that damages enemy units in an area around it.",
    "behavior": "Unit Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": "9",
    "mc": [
      "100",
      "110",
      "120",
      "130"
    ]
  },
  "spirit_breaker_herd_mentality": {
    "dname": "Herd Mentality",
    "img": "/apps/dota2/images/dota_react/abilities/spirit_breaker_herd_mentality.png",
    "desc": "The hero on your team whose level is lower than anybody else's on your team gains 50% more experience.",
    "behavior": "Passive"
  },
  "naga_siren_eelskin": {
    "dname": "Eelskin",
    "img": "/apps/dota2/images/dota_react/abilities/naga_siren_eelskin.png",
    "desc": "Naga Siren gets 8% evasion per other Naga Siren within 900 radius.",
    "behavior": "Passive"
  },
  "kez_grappling_claw": {
    "dname": "Grappling Claw",
    "img": "/apps/dota2/images/dota_react/abilities/kez_grappling_claw.png",
    "desc": "Kez swings on a grappling hook towards the target unit or tree. When the grappling hook collides with the target, that unit has slowed movement speed. Upon reaching the enemy target, Kez lands an attack on them.",
    "behavior": "Unit Target",
    "bkbpierce": "No",
    "cd": [
      "13",
      "11",
      "9",
      "7"
    ],
    "mc": "40"
  },
  "silencer_brain_drain": {
    "dname": "Brain Drain",
    "img": "/apps/dota2/images/dota_react/abilities/silencer_brain_drain.png",
    "desc": "If Silencer kills an enemy hero, he permanently steals Intelligence.",
    "behavior": "Passive"
  },
  "snapfire_scatterblast": {
    "dname": "Scatterblast",
    "img": "/apps/dota2/images/dota_react/abilities/snapfire_scatterblast.png",
    "desc": "Snapfire unloads with a wide blast that damages and slows enemies in a cone. Damage, Movement Slow, Attack Slow and Slow Duration are increased by 50% for enemies caught at point-blank range.",
    "behavior": "Point Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "18",
      "15",
      "12",
      "9"
    ],
    "mc": [
      "85",
      "90",
      "95",
      "100"
    ],
    "dmg": [
      "100",
      "160",
      "220",
      "280"
    ]
  },
  "disruptor_thunder_strike": {
    "dname": "Thunder Strike",
    "img": "/apps/dota2/images/dota_react/abilities/disruptor_thunder_strike.png",
    "desc": "Repeatedly strikes the targeted unit with lightning. Each strike damages nearby enemy units in a small radius and slows enemy movement and attack speed by 100% for x1.75 seconds. Provides vision of its target.",
    "behavior": "Unit Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "18",
      "15",
      "12",
      "9"
    ],
    "mc": [
      "125",
      "130",
      "135",
      "140"
    ]
  },
  "dragon_knight_inherited_vigor": {
    "dname": "Dragon Blood",
    "img": "/apps/dota2/images/dota_react/abilities/dragon_knight_inherited_vigor.png",
    "desc": "The life blood of the Dragon improves Dragon Knight's health regeneration and armor. Amount for both values is increased by 0.5 per level and is multiplied when in Dragon Form.",
    "behavior": "Passive"
  },
  "primal_beast_uproar": {
    "dname": "Uproar",
    "img": "/apps/dota2/images/dota_react/abilities/primal_beast_uproar.png",
    "desc": "The Beast's temper causes every instance of 50 hero damage or more to grant a stack of Uproar. \n\n When activated, Primal Beast releases a roar that slows surrounding enemies and grants the Beast additional attack damage and armor for 7 seconds based on his current stacks of Uproar.",
    "behavior": [
      "No Target",
      "Instant Cast"
    ],
    "cd": "0"
  },
  "oracle_prognosticate": {
    "dname": "Prognosticate",
    "img": "/apps/dota2/images/dota_react/abilities/oracle_prognosticate.png",
    "behavior": "Passive"
  },
  "clinkz_infernal_shred": {
    "dname": "Infernal Shred",
    "img": "/apps/dota2/images/dota_react/abilities/clinkz_infernal_shred.png",
    "desc": "Clinkz and his skeletons apply a stacking debuff that causes their attacks to pierce up to 20% of the target's total physical armor (does not reduce their armor). Clinkz applies 2% per attack, and skeletons apply 1%. \n\nLasts 5 seconds.",
    "behavior": "Passive"
  },
  "phoenix_sun_ray_toggle_move": {
    "dname": "Toggle Movement",
    "img": "/apps/dota2/images/dota_react/abilities/phoenix_sun_ray_toggle_move.png",
    "desc": "Toggles slow forward movement during Sun Ray firing.",
    "behavior": [
      "No Target",
      "Instant Cast"
    ]
  },
  "necrolyte_heartstopper_aura": {
    "dname": "Heartstopper Aura",
    "img": "/apps/dota2/images/dota_react/abilities/necrolyte_heartstopper_aura.png",
    "desc": "Necrophos stills the hearts of his opponents, causing nearby enemy units to lose a percentage of their max health over time.",
    "behavior": "Passive",
    "dmg_type": "Magical",
    "bkbpierce": "Yes"
  },
  "batrider_firefly": {
    "dname": "Firefly",
    "img": "/apps/dota2/images/dota_react/abilities/batrider_firefly.png",
    "desc": "Batrider takes to the skies, laying down a trail of flames from the air. The fire damages any enemies it touches, and destroys trees below Batrider.",
    "behavior": [
      "No Target",
      "Instant Cast"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "45",
      "40",
      "35",
      "30"
    ],
    "mc": "100"
  },
  "enigma_black_hole": {
    "dname": "Black Hole",
    "img": "/apps/dota2/images/dota_react/abilities/enigma_black_hole.png",
    "desc": "CHANNELED - Summons a vortex that sucks in nearby enemy units. Enemies affected by Black Hole cannot move, attack, or cast spells.",
    "behavior": [
      "AOE",
      "Point Target",
      "Channeled"
    ],
    "dmg_type": "Pure",
    "bkbpierce": "Yes",
    "cd": [
      "180",
      "170",
      "160"
    ],
    "mc": [
      "300",
      "400",
      "500"
    ]
  },
  "grimstroke_dark_artistry": {
    "dname": "Stroke of Fate",
    "img": "/apps/dota2/images/dota_react/abilities/grimstroke_dark_artistry.png",
    "desc": "Grimstroke paints a curved path of ink with his brush, damaging and slowing enemies. The damage is increased with each enemy the ink hits. Applies Ink Trail on hit.",
    "behavior": "Point Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "11",
      "9",
      "7",
      "5"
    ],
    "mc": [
      "100",
      "110",
      "120",
      "130"
    ]
  },
  "venomancer_plague_ward": {
    "dname": "Plague Ward",
    "img": "/apps/dota2/images/dota_react/abilities/venomancer_plague_ward.png",
    "desc": "Summons a plague ward to attack enemy units and structures. The ward is immune to magic. Wards gain the Poison Sting level from Venomancer, dealing 50% of the full damage.",
    "behavior": "Point Target",
    "dmg_type": "Physical",
    "bkbpierce": "Yes",
    "cd": "5",
    "mc": [
      "24",
      "26",
      "28",
      "30"
    ]
  },
  "rattletrap_armor_power": {
    "dname": "Armor Power",
    "img": "/apps/dota2/images/dota_react/abilities/rattletrap_armor_power.png",
    "desc": "Clockwerk's outgoing damage increases by 0.25% per point of armor.",
    "behavior": "Passive"
  },
  "chaos_knight_chaos_bolt": {
    "dname": "Chaos Bolt",
    "img": "/apps/dota2/images/dota_react/abilities/chaos_knight_chaos_bolt.png",
    "desc": "Throws a mysterious bolt of energy at the target unit. It stuns for a random duration and deals random damage.",
    "behavior": "Unit Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "13",
      "12",
      "11",
      "10"
    ],
    "mc": "110"
  },
  "magnataur_horn_toss": {
    "dname": "Horn Toss",
    "img": "/apps/dota2/images/dota_react/abilities/magnataur_horn_toss.png",
    "desc": "Magnus tosses any enemies in front of him, launching them to his rear. Enemies take damage, spend 0.6 seconds in the air, and are stunned while in the air and an additional amount of time after landing.",
    "behavior": [
      "No Target",
      "Hidden"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": "30",
    "mc": "100",
    "dmg": "300"
  },
  "phantom_lancer_illusory_armaments": {
    "dname": "Illusory Armaments",
    "img": "/apps/dota2/images/dota_react/abilities/phantom_lancer_illusory_armaments.png",
    "desc": "Whenever an illusion of Phantom Lancer is created, its outgoing damage cannot go below a fixed value for 3 seconds.",
    "behavior": "Passive"
  },
  "broodmother_spiders_milk": {
    "dname": "Spider's Milk",
    "img": "/apps/dota2/images/dota_react/abilities/broodmother_spiders_milk.png",
    "desc": "Whenever Broodmother kills a unit, she and all units under her control in a 600 radius receive a buff that heals them for a percentage of the victims health every 0.5 seconds. Healing from creeps is reduced by 40%.",
    "behavior": "Passive"
  },
  "kez_raptor_dance": {
    "dname": "Raptor Dance",
    "img": "/apps/dota2/images/dota_react/abilities/kez_raptor_dance.png",
    "desc": "Kez enters into an uncontrollable state for 1 second, becoming invulnerable for 0.2s and receiving a basic dispel, remaining immune to magic damage for the remainder of the cast time and the duration of the slashes.\n\n If the cast completes successfully, Kez performs a series of deadly radial slashes around him that deal damage based on the max health of the target and heal Kez for a percentage of all damage dealt.",
    "behavior": [
      "No Target",
      "AOE"
    ],
    "dmg_type": "Pure",
    "bkbpierce": "Yes",
    "cd": [
      "40",
      "35",
      "30"
    ],
    "mc": [
      "100",
      "125",
      "150"
    ]
  },
  "slardar_bash": {
    "dname": "Bash of the Deep",
    "img": "/apps/dota2/images/dota_react/abilities/slardar_bash.png",
    "desc": "After 3 attacks, your next attack will bash the target.",
    "behavior": "Passive",
    "dmg_type": "Physical",
    "bkbpierce": "Yes"
  },
  "invoker_chaos_meteor": {
    "dname": "Chaos Meteor",
    "img": "/apps/dota2/images/dota_react/abilities/invoker_chaos_meteor.png",
    "desc": "Invoker pulls a flaming meteor from space onto the targeted location. Upon landing, the meteor rolls forward, constantly dealing damage based on the level of Exort, and rolling further based on the level of Wex. Units hit by the meteor will also be set on fire for a short time, receiving additional damage based on the level of Exort.",
    "behavior": [
      "Point Target",
      "Hidden"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": "50",
    "mc": "200"
  },
  "lich_sinister_gaze": {
    "dname": "Sinister Gaze",
    "img": "/apps/dota2/images/dota_react/abilities/lich_sinister_gaze.png",
    "desc": "CHANNELED - Hypnotizes an enemy unit, causing it to move towards a point between the two of you and drains a percentage of its current mana.",
    "behavior": [
      "Unit Target",
      "Channeled"
    ],
    "bkbpierce": "No",
    "cd": [
      "24",
      "22",
      "20",
      "18"
    ],
    "mc": "25"
  },
  "luna_eclipse": {
    "dname": "Eclipse",
    "img": "/apps/dota2/images/dota_react/abilities/luna_eclipse.png",
    "desc": "Showers random nearby enemies with strikes from Luna's current level of Lucent Beam. These beams do not stun their targets, and there is a maximum number of times that a single target can be struck. Also turns day into night for a short time.",
    "behavior": "No Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": "105",
    "mc": [
      "150",
      "200",
      "250"
    ]
  },
  "storm_spirit_electric_vortex": {
    "dname": "Electric Vortex",
    "img": "/apps/dota2/images/dota_react/abilities/storm_spirit_electric_vortex.png",
    "desc": "A vortex that pulls an enemy unit to Storm Spirit's location.",
    "behavior": "Unit Target",
    "bkbpierce": "No",
    "cd": [
      "20",
      "18",
      "16",
      "14"
    ],
    "mc": [
      "60",
      "70",
      "80",
      "90"
    ]
  },
  "nevermore_frenzy": {
    "dname": "Feast of Souls",
    "img": "/apps/dota2/images/dota_react/abilities/nevermore_frenzy.png",
    "desc": "Shadow Fiend gains Bonus Attack Speed and Movement Speed for 8 seconds. For the duration of the effect, Necromastery's Max Soul count is increased by 5, but he loses that amount of souls after it is done.",
    "behavior": [
      "No Target",
      "Instant Cast"
    ],
    "cd": "21",
    "mc": [
      "60",
      "65",
      "70",
      "75"
    ]
  },
  "windrunner_easy_breezy": {
    "dname": "Easy Breezy",
    "img": "/apps/dota2/images/dota_react/abilities/windrunner_easy_breezy.png",
    "desc": "Windranger's movement speed cannot be lower than 240 and can reach 600.",
    "behavior": "Passive"
  },
  "monkey_king_tree_dance": {
    "dname": "Tree Dance",
    "img": "/apps/dota2/images/dota_react/abilities/monkey_king_tree_dance.png",
    "desc": "Monkey King jumps to a tree and perches atop it. While perched, he gains the Primal Spring ability-a channeled leap attack. If Monkey King's tree is destroyed, he falls and is stunned for 3 seconds. Taking damage while on the ground puts Tree Dance on cooldown.",
    "behavior": "Unit Target",
    "cd": [
      "1.40",
      "1.2",
      "1",
      "0.8",
      "0"
    ],
    "mc": "0"
  },
  "elder_titan_earth_splitter": {
    "dname": "Earth Splitter",
    "img": "/apps/dota2/images/dota_react/abilities/elder_titan_earth_splitter.png",
    "desc": "Sends forth a jagged crack in front of Elder Titan. After 3 seconds, the crack implodes, slowing movement while dealing damage to each enemy based on their maximum life. Half of the damage dealt is Magical damage, while the other half is Physical damage.",
    "behavior": "Point Target",
    "dmg_type": "Magical",
    "bkbpierce": "Yes",
    "cd": "100",
    "mc": [
      "125",
      "175",
      "225"
    ]
  },
  "rubick_empty2": {
    "dname": "Stolen Spell",
    "img": "/apps/dota2/images/dota_react/abilities/rubick_empty2.png",
    "desc": "Spells acquired with Spell Steal will replace this slot.",
    "behavior": "Passive"
  },
  "razor_storm_surge": {
    "dname": "Storm Surge",
    "img": "/apps/dota2/images/dota_react/abilities/razor_storm_surge.png",
    "desc": "There's a chance when attacked, and always when targeted with a spell, to release a forked lightning that strikes the target and other nearby enemies, prioritizing the unit type of the attacker, dealing damage and slowing movement speed.",
    "behavior": "Passive",
    "dmg_type": "Magical",
    "dmg": [
      "50",
      "90",
      "130",
      "170"
    ]
  },
  "witch_doctor_maledict": {
    "dname": "Maledict",
    "img": "/apps/dota2/images/dota_react/abilities/witch_doctor_maledict.png",
    "desc": "Curses all enemy Heroes and player-controlled units in a small area, causing them to take a set amount of damage each second, as well as bursts of damage every 4 seconds based on how much health they have lost since the curse began.",
    "behavior": [
      "AOE",
      "Point Target"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "30",
      "26",
      "22",
      "18"
    ],
    "mc": [
      "105",
      "110",
      "115",
      "120"
    ],
    "dmg": [
      "18",
      "22",
      "26",
      "30"
    ]
  },
  "snapfire_spit_creep": {
    "dname": "Spit Out",
    "img": "/apps/dota2/images/dota_react/abilities/snapfire_spit_creep.png",
    "desc": "Mortimer spits out the unit that's in his mouth, causing impact damage and stun in a large area. The glob leaves a pool of firespit based on the current level of Mortimer Kisses, that slows and applies damage over time. Spit Out has a no minimum launch range.",
    "behavior": [
      "Point Target",
      "AOE"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": "0"
  },
  "nyx_assassin_unburrow": {
    "dname": "Unburrow",
    "img": "/apps/dota2/images/dota_react/abilities/nyx_assassin_unburrow.png",
    "desc": "Emerge from the burrow.",
    "behavior": [
      "Hidden",
      "No Target"
    ],
    "cd": "0",
    "mc": "0"
  },
  "storm_spirit_ball_lightning": {
    "dname": "Ball Lightning",
    "img": "/apps/dota2/images/dota_react/abilities/storm_spirit_ball_lightning.png",
    "desc": "Storm Spirit becomes volatile electricity, charging across the battlefield until he depletes his mana or reaches his target. The activation mana cost is 25+7.5% of his total mana pool, and the cost per 100 units traveled is 10+0.65% of his total mana pool. Damage is expressed in damage per 100 units traveled.",
    "behavior": "Point Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "mc": "30",
    "dmg": [
      "6",
      "10",
      "14"
    ]
  },
  "doom_bringer_infernal_blade": {
    "dname": "Infernal Blade",
    "img": "/apps/dota2/images/dota_react/abilities/doom_bringer_infernal_blade.png",
    "desc": "Doom swings his burning sword, igniting the enemy. Stuns for 0.6 seconds and applies a 4 second burn that deals a base damage plus a percentage of the target's Max HP as damage per second.",
    "behavior": [
      "Unit Target",
      "Autocast",
      "Attack Modifier"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "13",
      "10",
      "7",
      "4"
    ],
    "mc": "40"
  },
  "bane_nightmare": {
    "dname": "Nightmare",
    "img": "/apps/dota2/images/dota_react/abilities/bane_nightmare.png",
    "desc": "Puts the target enemy or friendly Hero to sleep. Sleeping units are awakened when damaged. If the target was directly attacked, the Nightmare passes to the attacking unit. Bane can attack and damage Nightmared targets freely.",
    "behavior": "Unit Target",
    "bkbpierce": "No",
    "cd": [
      "25",
      "22",
      "19",
      "16"
    ],
    "mc": [
      "120",
      "130",
      "140",
      "150"
    ]
  },
  "necrolyte_ghost_shroud": {
    "dname": "Ghost Shroud",
    "img": "/apps/dota2/images/dota_react/abilities/necrolyte_ghost_shroud.png",
    "desc": "Necrophos slips into the realm that separates the living from the dead. Unable to attack or be attacked, he emits an aura that slows enemies around him. He takes additional magic damage in this form, but his restorative powers are amplified.",
    "behavior": [
      "No Target",
      "Instant Cast"
    ],
    "bkbpierce": "No",
    "cd": [
      "28",
      "24",
      "20",
      "16"
    ],
    "mc": "75"
  },
  "centaur_mount": {
    "dname": "Hitch A Ride",
    "img": "/apps/dota2/images/dota_react/abilities/centaur_mount.png",
    "desc": "Centaur tosses an ally into a cart hitched behind him. While in the cart, the ally is invulnerable and can still cast and attack normally, but cannot move independently or be targeted by opponents. Increases the attack range of melee heroes by 200.",
    "behavior": [
      "Unit Target",
      "Hidden"
    ],
    "bkbpierce": "Yes",
    "cd": "30",
    "mc": "75"
  },
  "muerta_the_calling": {
    "dname": "The Calling",
    "img": "/apps/dota2/images/dota_react/abilities/muerta_the_calling.png",
    "behavior": [
      "Point Target",
      "AOE"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": "30",
    "mc": [
      "135",
      "150",
      "165",
      "180"
    ],
    "dmg": [
      "45",
      "90",
      "135",
      "180"
    ]
  },
  "winter_wyvern_arctic_burn": {
    "dname": "Arctic Burn",
    "img": "/apps/dota2/images/dota_react/abilities/winter_wyvern_arctic_burn.png",
    "desc": "Winter Wyvern soars upon an arctic wind, granting her unobstructed movement and allowing her to exhale a blistering chill into each attack. While soaring, her attacks travel further and faster, and slow enemies with a magical freeze that strips them of 4% of their current health each second.",
    "behavior": [
      "No Target",
      "Instant Cast"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "26",
      "24",
      "22",
      "20"
    ],
    "mc": "100"
  },
  "meepo_megameepo": {
    "dname": "MegaMeepo",
    "img": "/apps/dota2/images/dota_react/abilities/meepo_megameepo.png",
    "desc": "Primary Meepo mounts all other Meepos in a 600 radius around him on top of his shoulders. While in this form, he gains 40% of the other Meepo stats and can Fling them at enemies, dealing damage and slowing them.\n\n When cast, Earthbind generates additional nets and Poof deals bonus damage based on the amount of Meepos riding on top.",
    "behavior": [
      "Instant Cast",
      "No Target"
    ],
    "cd": "60",
    "mc": "0"
  },
  "death_prophet_carrion_swarm": {
    "dname": "Crypt Swarm",
    "img": "/apps/dota2/images/dota_react/abilities/death_prophet_carrion_swarm.png",
    "desc": "Sends a swarm of winged beasts to savage enemy units in front of Death Prophet.",
    "behavior": [
      "Unit Target",
      "Point Target"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "9",
      "8",
      "7",
      "6"
    ],
    "mc": [
      "80",
      "90",
      "100",
      "110"
    ],
    "dmg": [
      "100",
      "175",
      "250",
      "325"
    ]
  },
  "pugna_life_drain": {
    "dname": "Life Drain",
    "img": "/apps/dota2/images/dota_react/abilities/pugna_life_drain.png",
    "desc": "CHANNELED - When cast on an enemy, Pugna drains health from the target enemy unit to heal himself and granting vision over the target.\n\nWhen cast on an ally, Pugna will drain his own health into his ally.",
    "behavior": [
      "Unit Target",
      "Channeled"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": "7",
    "mc": [
      "100",
      "150",
      "200"
    ]
  },
  "storm_spirit_static_remnant": {
    "dname": "Static Remnant",
    "img": "/apps/dota2/images/dota_react/abilities/storm_spirit_static_remnant.png",
    "desc": "Creates an explosively charged image of Storm Spirit that lasts 12 seconds and will detonate and deal damage if an enemy unit comes near it.",
    "behavior": "No Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": "3.5",
    "mc": [
      "70",
      "80",
      "90",
      "100"
    ],
    "dmg": [
      "100",
      "160",
      "220",
      "280"
    ]
  },
  "ogre_magi_smash": {
    "dname": "Fire Shield",
    "img": "/apps/dota2/images/dota_react/abilities/ogre_magi_smash.png",
    "desc": "Creates a shield around the target ally, absorbing a percentage of the damage of next 3 attacks from enemy heroes. When damage is absorbed, a fireball is launched at the attacker. Can be cast on towers.",
    "behavior": [
      "Unit Target",
      "Hidden"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": "15",
    "mc": "50"
  },
  "sandking_scorpion_strike": {
    "dname": "Stinger",
    "img": "/apps/dota2/images/dota_react/abilities/sandking_scorpion_strike.png",
    "desc": "Sand King strikes an area, performing an attack on all enemies in the area of effect, dealing extra damage. Enemies within an innermost radius of 125 take 40% extra damage. Applies Caustic Finale and a slow to all enemies hit.",
    "behavior": [
      "Point Target",
      "AOE"
    ],
    "dmg_type": "Physical",
    "cd": [
      "15",
      "12",
      "9",
      "6"
    ],
    "mc": [
      "35",
      "40",
      "45",
      "50"
    ]
  },
  "zuus_thundergods_wrath": {
    "dname": "Thundergod's Wrath",
    "img": "/apps/dota2/images/dota_react/abilities/zuus_thundergods_wrath.png",
    "desc": "Strikes all enemy heroes with a bolt of lightning, dealing damage, no matter where they may be.\n\nThundergod's Wrath also provides True Sight around each hero struck. If an enemy hero is invisible, it takes no damage, but the True Sight is still created at that hero's location.",
    "behavior": "No Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": "130",
    "mc": [
      "250",
      "375",
      "500"
    ],
    "dmg": [
      "300",
      "475",
      "650"
    ]
  },
  "hoodwink_mistwoods_wayfarer": {
    "dname": "Mistwoods Wayfarer",
    "img": "/apps/dota2/images/dota_react/abilities/hoodwink_mistwoods_wayfarer.png",
    "behavior": "Passive"
  },
  "undying_soul_rip": {
    "dname": "Soul Rip",
    "img": "/apps/dota2/images/dota_react/abilities/undying_soul_rip.png",
    "desc": "Undying rips health away from all nearby units and uses it to heal an ally, or damage an enemy. Soul Rip can also be used to heal Tombstone.",
    "behavior": "Unit Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "15",
      "12",
      "9",
      "6"
    ],
    "mc": [
      "80",
      "90",
      "100",
      "110"
    ]
  },
  "night_stalker_heart_of_darkness": {
    "dname": "Heart of Darkness",
    "img": "/apps/dota2/images/dota_react/abilities/night_stalker_heart_of_darkness.png",
    "desc": "During the night, Night Stalker's health regeneration is increased by 20%.",
    "behavior": "Passive"
  },
  "tidehunter_kraken_shell": {
    "dname": "Kraken Shell",
    "img": "/apps/dota2/images/dota_react/abilities/tidehunter_kraken_shell.png",
    "desc": "Thickens Tidehunter's hide to passively block a portion of any incoming physical attack damage. Reduced block amount versus creeps.\n\nCan be activated to double the block amount at the cost of 40% movement speed. Lasts 4s.",
    "behavior": [
      "No Target",
      "Instant Cast"
    ],
    "cd": "30",
    "mc": "45"
  },
  "faceless_void_time_walk": {
    "dname": "Time Walk",
    "img": "/apps/dota2/images/dota_react/abilities/faceless_void_time_walk.png",
    "desc": "Rushes to a target location while backtracking any damage taken the last 2 seconds.",
    "behavior": "Point Target",
    "bkbpierce": "Yes",
    "cd": [
      "21",
      "16",
      "11",
      "6"
    ],
    "mc": "40"
  },
  "bloodseeker_thirst": {
    "dname": "Thirst",
    "img": "/apps/dota2/images/dota_react/abilities/bloodseeker_thirst.png",
    "desc": "Bloodseeker is invigorated by the wounds of his enemies, gaining bonus movement speed when an enemy hero's health falls below 100%, with the bonuses increasing as their health falls further. If an enemy hero's health falls below 25%, he will also gain vision and True Sight of that hero. Bonuses stack per hero. Unlocks max movement speed for Bloodseeker.",
    "behavior": "Passive",
    "bkbpierce": "Yes",
    "cd": "15",
    "mc": "0"
  },
  "brewmaster_primal_split": {
    "dname": "Primal Split",
    "img": "/apps/dota2/images/dota_react/abilities/brewmaster_primal_split.png",
    "desc": "Splits Brewmaster into elements, forming 3 specialized warriors, adept at survival, each with their own abilities. If any of them survive until the end of their summoned timer, the Brewmaster is reborn. Each Warrior gains its respective Drunken Brawler stance.",
    "behavior": "No Target",
    "cd": [
      "140",
      "130",
      "120"
    ],
    "mc": [
      "150",
      "200",
      "250",
      "250"
    ]
  },
  "necrolyte_reapers_scythe": {
    "dname": "Reaper's Scythe",
    "img": "/apps/dota2/images/dota_react/abilities/necrolyte_reapers_scythe.png",
    "desc": "Stuns the target enemy hero, then deals damage based on how much life it is missing. If Necrophos kills an enemy this way, he'll permanently gain Health and Mana Regen. Any kill under this effect is credited to Necrophos.",
    "behavior": "Unit Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": "100",
    "mc": [
      "250",
      "375",
      "500"
    ]
  },
  "pugna_nether_blast": {
    "dname": "Nether Blast",
    "img": "/apps/dota2/images/dota_react/abilities/pugna_nether_blast.png",
    "desc": "An exploding pulse deals damage to enemies and structures in the area. Deals 65% damage to structures.",
    "behavior": [
      "AOE",
      "Point Target"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": "5",
    "mc": [
      "100",
      "115",
      "130",
      "145"
    ]
  },
  "lycan_feral_impulse": {
    "dname": "Feral Impulse",
    "img": "/apps/dota2/images/dota_react/abilities/lycan_feral_impulse.png",
    "desc": "Increases the HP regeneration and damage of Lycan and all units under his control.",
    "behavior": "Passive"
  },
  "dark_willow_bramble_maze": {
    "dname": "Bramble Maze",
    "img": "/apps/dota2/images/dota_react/abilities/dark_willow_bramble_maze.png",
    "desc": "Dark Willow creates a 500 AoE maze of 4 brambles that grow in the target area after 0.3 seconds. Enemies that walk into a bramble are rooted and take damage over time. Lasts 12 seconds.",
    "behavior": [
      "Point Target",
      "AOE"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": "22",
    "mc": [
      "100",
      "120",
      "140",
      "160"
    ]
  },
  "chaos_knight_chaos_strike": {
    "dname": "Chaos Strike",
    "img": "/apps/dota2/images/dota_react/abilities/chaos_knight_chaos_strike.png",
    "desc": "Chaos Knight and his illusions' attacks have a chance to deal a critical strike of varying strength with bonus lifesteal. Lifesteal from creeps is reduced.",
    "behavior": "Passive",
    "bkbpierce": "Yes"
  },
  "centaur_work_horse": {
    "dname": "Work Horse",
    "img": "/apps/dota2/images/dota_react/abilities/centaur_work_horse.png",
    "desc": "Centaur hitches a cart behind him. While active, Centaur gains the benefit of Stampede for the current level of Stampede, and can cast Hitch a Ride on a target ally.",
    "behavior": "No Target",
    "bkbpierce": "Yes",
    "cd": "35",
    "mc": "75"
  },
  "shredder_flamethrower": {
    "dname": "Flamethrower",
    "img": "/apps/dota2/images/dota_react/abilities/shredder_flamethrower.png",
    "desc": "Releases a flame in the direction Timbersaw is facing. Applies a debuff that deals damage per second and slows enemy movement speed. Affects buildings for reduced damage.",
    "behavior": [
      "No Target",
      "Instant Cast",
      "Hidden"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": "20",
    "mc": "100"
  },
  "medusa_stone_gaze": {
    "dname": "Stone Gaze",
    "img": "/apps/dota2/images/dota_react/abilities/medusa_stone_gaze.png",
    "desc": "Any enemy units looking at Medusa will have their movement and attack speed slowed. If 2 seconds of total time is accumulated looking at Medusa while Stone Gaze is active, that unit will turn to stone. Petrified units are stunned, and take bonus physical attack damage.",
    "behavior": "No Target",
    "bkbpierce": "Yes",
    "cd": "90",
    "mc": "250"
  },
  "bounty_hunter_track": {
    "dname": "Track",
    "img": "/apps/dota2/images/dota_react/abilities/bounty_hunter_track.png",
    "desc": "Tracks an enemy hero, granting True Sight of the target, increasing the damage they take and providing information on how much gold it is carrying. Bounty Hunter moves fast when near the tracked unit. If the target dies, Bounty Hunter and nearby heroes collect a bonus bounty of gold. Casting Track does not take you out of invisibility.",
    "behavior": "Unit Target",
    "bkbpierce": "Yes",
    "cd": [
      "6",
      "5",
      "4"
    ],
    "mc": "60"
  },
  "dazzle_poison_touch": {
    "dname": "Poison Touch",
    "img": "/apps/dota2/images/dota_react/abilities/dazzle_poison_touch.png",
    "desc": "Releases a cone of poison that strikes multiple enemy units. Deals damage over time and slows the targets. Anytime the targets get attacked by Dazzle, the debuff duration is refreshed and slow is increased.",
    "behavior": "Unit Target",
    "dmg_type": "Physical",
    "bkbpierce": "No",
    "cd": [
      "24",
      "21",
      "18",
      "15"
    ],
    "mc": [
      "125",
      "130",
      "135",
      "140"
    ]
  },
  "monkey_king_jingu_mastery": {
    "dname": "Jingu Mastery",
    "img": "/apps/dota2/images/dota_react/abilities/monkey_king_jingu_mastery.png",
    "desc": "Monkey King's attacks awaken the Jingu Bang's power. Upon the fourth hit on the same enemy hero, Monkey King earns 4 charged attacks that have bonus damage and lifesteal.",
    "behavior": "Passive",
    "dmg_type": "Physical",
    "bkbpierce": "Yes",
    "cd": "0"
  },
  "puck_waning_rift": {
    "dname": "Waning Rift",
    "img": "/apps/dota2/images/dota_react/abilities/puck_waning_rift.png",
    "desc": "Puck teleports to the target location and releases a burst of faerie dust that deals damage and silences enemy units nearby.",
    "behavior": [
      "Point Target",
      "AOE"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "16",
      "15",
      "14",
      "13"
    ],
    "mc": [
      "100",
      "110",
      "120",
      "130"
    ],
    "dmg": [
      "60",
      "120",
      "180",
      "240"
    ]
  },
  "mirana_starfall": {
    "dname": "Starstorm",
    "img": "/apps/dota2/images/dota_react/abilities/mirana_starfall.png",
    "desc": "Calls down a wave of meteors to damage nearby enemy units. The closest enemy unit to Mirana in a 675 radius will be struck a second time.",
    "behavior": "No Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": "12",
    "mc": [
      "80",
      "90",
      "100",
      "110"
    ],
    "dmg": [
      "75",
      "150",
      "225",
      "300"
    ]
  },
  "sven_gods_strength": {
    "dname": "God's Strength",
    "img": "/apps/dota2/images/dota_react/abilities/sven_gods_strength.png",
    "desc": "Sven channels his rogue strength, granting bonus damage and slow resistance for 30 seconds.",
    "behavior": "No Target",
    "cd": [
      "110",
      "105",
      "100"
    ],
    "mc": [
      "100",
      "125",
      "150"
    ]
  },
  "skeleton_king_vampiric_spirit": {
    "dname": "Vampiric Spirit",
    "img": "/apps/dota2/images/dota_react/abilities/skeleton_king_vampiric_spirit.png",
    "desc": "Grants Wraith King Lifesteal. When slain Wraith King turns into a free pathing Wraith with Bonus Attack and Movement Speed for a short duration, delaying his death. Wraith King cannot reincarnate after being a Wraith.",
    "behavior": "Passive"
  },
  "windrunner_focusfire": {
    "dname": "Focus Fire",
    "img": "/apps/dota2/images/dota_react/abilities/windrunner_focusfire.png",
    "desc": "Windranger channels the wind to gain 0 additional attack speed against a single enemy unit or structure, though with a reduction to her attack damage. Extra damage from secondary item effects is not reduced.",
    "behavior": "Unit Target",
    "bkbpierce": "Yes",
    "cd": [
      "70",
      "50",
      "30"
    ],
    "mc": [
      "75",
      "100",
      "125"
    ]
  },
  "enigma_gravity_well": {
    "dname": "Gravity Well",
    "img": "/apps/dota2/images/dota_react/abilities/enigma_gravity_well.png",
    "desc": "Allies within 500 distance from Enigma have up to 9% Damage Reduction. Effect starts at 0% at max distance and increases to its maximum strength when the ally is at 200 distance. Does not affect Enigma itself.",
    "behavior": "Passive"
  },
  "chen_penitence": {
    "dname": "Penitence",
    "img": "/apps/dota2/images/dota_react/abilities/chen_penitence.png",
    "desc": "Damages enemy unit, forces it to move slower and lets allies attack it more quickly.",
    "behavior": "Unit Target",
    "dmg_type": "Pure",
    "bkbpierce": "No",
    "cd": [
      "20",
      "17",
      "14",
      "11"
    ],
    "mc": [
      "80",
      "90",
      "100",
      "110"
    ],
    "dmg": [
      "50",
      "75",
      "100",
      "125"
    ]
  },
  "marci_grapple": {
    "dname": "Dispose",
    "img": "/apps/dota2/images/dota_react/abilities/marci_grapple.png",
    "desc": "Marci grabs an allied or enemy target and throws it effortlessly behind her, damaging and slowing the unit if it's an enemy. Any enemy units in the landing area will also be damaged and slowed.",
    "behavior": "Unit Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "16",
      "14",
      "12",
      "10"
    ],
    "mc": "80"
  },
  "viper_nose_dive": {
    "dname": "Nosedive",
    "img": "/apps/dota2/images/dota_react/abilities/viper_nose_dive.png",
    "desc": "Viper slams into the ground, releasing a Nethertoxin and splattering each enemy in a 500 AoE for 4 seconds with the effect of Corrosive Skin.",
    "behavior": [
      "Point Target",
      "AOE"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": "20",
    "mc": "75"
  },
  "nevermore_shadowraze3": {
    "dname": "Shadowraze",
    "img": "/apps/dota2/images/dota_react/abilities/nevermore_shadowraze3.png",
    "desc": "Shadow Fiend razes the ground a longer distance away from him, dealing damage to enemy units in the area. Adds a stacking damage amplifier on the target that causes the enemy to take bonus Shadowraze damage per stack.",
    "behavior": "No Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": "9",
    "mc": "80"
  },
  "earthshaker_fissure": {
    "dname": "Fissure",
    "img": "/apps/dota2/images/dota_react/abilities/earthshaker_fissure.png",
    "desc": "Slams the ground with a mighty totem, creating an impassable ridge of stone while stunning and damaging enemy units along its line.",
    "behavior": "Point Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "18",
      "17",
      "16",
      "15"
    ],
    "mc": [
      "120",
      "125",
      "130",
      "135"
    ],
    "dmg": [
      "100",
      "160",
      "220",
      "280"
    ]
  },
  "legion_commander_outfight_them": {
    "dname": "Outfight Them!",
    "img": "/apps/dota2/images/dota_react/abilities/legion_commander_outfight_them.png",
    "desc": "Attacking an enemy hero that is equal or higher level than you increases your Health Restoration by 30% for 4s.",
    "behavior": "Passive"
  },
  "kez_echo_slash": {
    "dname": "Echo Slash",
    "img": "/apps/dota2/images/dota_react/abilities/kez_echo_slash.png",
    "desc": "Kez slashes forward in a line with his Katana, attacking enemies in an area and applying a brief slow. After a short delay, the area is attacked again. Heroes take bonus damage.",
    "behavior": "No Target",
    "dmg_type": "Physical",
    "cd": [
      "21",
      "18",
      "15",
      "12"
    ],
    "mc": [
      "75",
      "90",
      "105",
      "120"
    ]
  },
  "centaur_return": {
    "dname": "Retaliate",
    "img": "/apps/dota2/images/dota_react/abilities/centaur_return.png",
    "desc": "Centaur counters all attacks, dealing damage back to the attacker. Returns a fixed amount plus a percentage of your strength. Deals half damage to towers.",
    "behavior": "Passive",
    "dmg_type": "Physical",
    "bkbpierce": "Yes"
  },
  "earthshaker_enchant_totem": {
    "dname": "Enchant Totem",
    "img": "/apps/dota2/images/dota_react/abilities/earthshaker_enchant_totem.png",
    "desc": "Empowers Earthshaker's totem, causing it to deal extra damage and have 100 bonus attack range on the next attack.",
    "behavior": "No Target",
    "cd": "5",
    "mc": [
      "45",
      "55",
      "65",
      "75"
    ],
    "dmg": "0"
  },
  "crystal_maiden_freezing_field": {
    "dname": "Freezing Field",
    "img": "/apps/dota2/images/dota_react/abilities/crystal_maiden_freezing_field.png",
    "desc": "CHANNELED - Surrounds Crystal Maiden with 100 random icy explosions that slow enemies and deal massive damage. Lasts 10 seconds.",
    "behavior": [
      "No Target",
      "Channeled"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "100",
      "95",
      "90"
    ],
    "mc": [
      "200",
      "400",
      "600"
    ],
    "dmg": [
      "110",
      "180",
      "250"
    ]
  },
  "tusk_snowball": {
    "dname": "Snowball",
    "img": "/apps/dota2/images/dota_react/abilities/tusk_snowball.png",
    "desc": "Tusk begins rolling into a snowball. Allies within a 325 radius can also be added to the snowball by right-clicking on them, even while the snowball is moving. Once launched, any enemies caught in the snowball's path will be stunned and take damage. Each allied Hero in the snowball will add to its damage and stun duration.",
    "behavior": "Unit Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "21",
      "19",
      "17",
      "15"
    ],
    "mc": "75"
  },
  "queenofpain_sonic_wave": {
    "dname": "Sonic Wave",
    "img": "/apps/dota2/images/dota_react/abilities/queenofpain_sonic_wave.png",
    "desc": "Creates a gigantic wave of sound in front of Queen of Pain, dealing heavy damage to all enemy units in its wake and pushing them back.",
    "behavior": "Point Target",
    "dmg_type": "Pure",
    "bkbpierce": "Yes",
    "cd": [
      "110",
      "95",
      "80"
    ],
    "mc": [
      "250",
      "400",
      "550"
    ],
    "dmg": [
      "325",
      "475",
      "625"
    ]
  },
  "bounty_hunter_wind_walk": {
    "dname": "Shadow Walk",
    "img": "/apps/dota2/images/dota_react/abilities/bounty_hunter_wind_walk.png",
    "desc": "Bounty Hunter becomes invisible and gains the ability to move through other units until he attacks or uses an ability. If he breaks the invisibility with an attack, that attack will stun the target for a short duration.",
    "behavior": [
      "No Target",
      "Instant Cast"
    ],
    "cd": [
      "18",
      "17",
      "16",
      "15"
    ],
    "mc": "50"
  },
  "abaddon_aphotic_shield": {
    "dname": "Aphotic Shield",
    "img": "/apps/dota2/images/dota_react/abilities/abaddon_aphotic_shield.png",
    "desc": "Summons dark energies around an ally unit, dispelling them and creating an all damage barrier that absorbs a set amount of damage before expiring. When the barrier is destroyed it will burst and deal damage equal to the amount it could absorb to an area around it.\n\nDISPEL TYPE: Strong Dispel",
    "behavior": "Unit Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "12",
      "10",
      "8",
      "6"
    ],
    "mc": [
      "110",
      "120",
      "130",
      "140"
    ]
  },
  "techies_suicide": {
    "dname": "Blast Off!",
    "img": "/apps/dota2/images/dota_react/abilities/techies_suicide.png",
    "desc": "Techies hurtle themselves into the enemy's midst, detonating charges upon impact which deal massive area of effect damage and stun enemies. Upon landing, the assault deals Techies non-lethal damage equal to a percentage of their current health.",
    "behavior": [
      "Point Target",
      "AOE"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "40",
      "35",
      "30",
      "25"
    ],
    "mc": [
      "100",
      "125",
      "150",
      "175"
    ]
  },
  "ursa_earthshock": {
    "dname": "Earthshock",
    "img": "/apps/dota2/images/dota_react/abilities/ursa_earthshock.png",
    "desc": "Ursa leaps forward 250 units and slams the earth, causing a powerful shock to damage and slow all enemy units in a nearby area for 4 seconds.",
    "behavior": [
      "No Target",
      "Instant Cast"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "15",
      "13",
      "11",
      "9"
    ],
    "mc": "95",
    "dmg": [
      "75",
      "125",
      "175",
      "225"
    ]
  },
  "warlock_rain_of_chaos": {
    "dname": "Chaotic Offering",
    "img": "/apps/dota2/images/dota_react/abilities/warlock_rain_of_chaos.png",
    "desc": "Summons a Golem from the depths, stunning enemies for 0.8 seconds. The Golem lives 60 seconds, takes reduced damage from spells, has increased Slow Resistance, has Permanent Immolation and Flaming Fists on attack.",
    "behavior": [
      "Point Target",
      "AOE"
    ],
    "bkbpierce": "Yes",
    "cd": "165",
    "mc": [
      "200",
      "400",
      "600"
    ]
  },
  "templar_assassin_psi_blades": {
    "dname": "Psi Blades",
    "img": "/apps/dota2/images/dota_react/abilities/templar_assassin_psi_blades.png",
    "desc": "Templar Assassin's psi blades slice through the attacked unit, splitting and damaging enemy units directly behind it, while gaining bonus attack range. For each unit it damages, the split damage is reduced by a percentage.",
    "behavior": "Passive",
    "dmg_type": "Pure",
    "bkbpierce": "Yes"
  },
  "gyrocopter_call_down": {
    "dname": "Call Down",
    "img": "/apps/dota2/images/dota_react/abilities/gyrocopter_call_down.png",
    "desc": "Call down 3 aerial missile strikes that slow and damage enemy units in a target area. Each strike is 500 distance from the previous one.",
    "behavior": [
      "Point Target",
      "AOE"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "90",
      "75",
      "60"
    ],
    "mc": [
      "150",
      "200",
      "250"
    ]
  },
  "lycan_summon_wolves": {
    "dname": "Summon Wolves",
    "img": "/apps/dota2/images/dota_react/abilities/lycan_summon_wolves.png",
    "desc": "Summons 2 wolves to aid Lycan in battle. At level 3, wolves gain Permanent Invisibility, and at level 4 wolves gain Cripple that gives 20% chance to cripple the target, causing 8 damage per second and lose 60 attack speed for 4 seconds.",
    "behavior": "No Target",
    "cd": "30",
    "mc": [
      "115",
      "120",
      "125",
      "130",
      "130",
      "130"
    ],
    "dmg": [
      "22",
      "28",
      "34",
      "40",
      "46",
      "52"
    ]
  },
  "luna_lunar_blessing": {
    "dname": "Lunar Blessing",
    "img": "/apps/dota2/images/dota_react/abilities/luna_lunar_blessing.png",
    "desc": "Grants attack damage to Luna and nearby allied heroes, with Luna receiving double the attack damage bonuses. At night, Lunar Blessing is global, and Luna is blessed with additional night vision.",
    "behavior": [
      "Passive",
      "Hidden"
    ],
    "bkbpierce": "Yes"
  },
  "invoker_forge_spirit": {
    "dname": "Forge Spirit",
    "img": "/apps/dota2/images/dota_react/abilities/invoker_forge_spirit.png",
    "desc": "Invoker forges a spirit embodying the strength of fire and fortitude of ice. Damage and armor are based on the level of Exort while attack range, health, and duration are based on the level of Quas. The elemental's scorching attack is capable of melting the armor of enemy heroes. The number of spirits spawned is determined by the lower level of Quas and Exort.",
    "behavior": [
      "No Target",
      "Hidden"
    ],
    "bkbpierce": "No",
    "cd": "27",
    "mc": "75"
  },
  "primal_beast_pulverize": {
    "dname": "Pulverize",
    "img": "/apps/dota2/images/dota_react/abilities/primal_beast_pulverize.png",
    "desc": "CHANNELED - Primal Beast channels his rage, grabbing the target enemy and slamming them into the ground repeatedly, damaging and mini-stunning any enemies caught in the AoE. Each consecutive hit deals bonus damage. Lasts 2.3 seconds.",
    "behavior": [
      "Channeled",
      "Unit Target",
      "AOE"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "Yes",
    "cd": [
      "40",
      "35",
      "30"
    ],
    "mc": "100"
  },
  "kunkka_tidal_wave": {
    "dname": "Tidal Wave",
    "img": "/apps/dota2/images/dota_react/abilities/kunkka_tidal_wave.png",
    "desc": "Releases a Tidal Wave that spawns behind Kunkka. Deals damage and drags enemies along it. Enemies cannot attack while being dragged.",
    "behavior": [
      "Point Target",
      "Hidden"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": "12",
    "mc": "75",
    "dmg": "180"
  },
  "antimage_mana_void": {
    "dname": "Mana Void",
    "img": "/apps/dota2/images/dota_react/abilities/antimage_mana_void.png",
    "desc": "For each point of mana missing by the target unit, damage is dealt to it and surrounding enemies. The main target is also mini-stunned.",
    "behavior": [
      "Unit Target",
      "AOE"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": "70",
    "mc": [
      "100",
      "150",
      "200"
    ],
    "dmg": [
      "0.8",
      "0.95",
      "1.1"
    ]
  },
  "marci_bodyguard": {
    "dname": "Bodyguard",
    "img": "/apps/dota2/images/dota_react/abilities/marci_bodyguard.png",
    "desc": "Passively grants Marci lifesteal and bonus attack damage.\n\nMarci protects an allied hero. For 1s, the ally also gains 75% of lifesteal and attack damage bonus. Whenever the ally attacks or is attacked by an enemy, Marci counter-attacks that target if they are within her attack range plus 125.",
    "behavior": "Unit Target",
    "dmg_type": "Physical",
    "bkbpierce": "Yes",
    "cd": "20",
    "mc": "50"
  },
  "bounty_hunter_jinada": {
    "dname": "Jinada",
    "img": "/apps/dota2/images/dota_react/abilities/bounty_hunter_jinada.png",
    "desc": "Bounty Hunter plans his next hit, dealing bonus damage and stealing some unreliable gold.",
    "behavior": [
      "Unit Target",
      "Autocast",
      "Attack Modifier"
    ],
    "dmg_type": "Physical",
    "bkbpierce": "Yes",
    "cd": [
      "9",
      "7",
      "5",
      "3"
    ]
  },
  "rattletrap_battery_assault": {
    "dname": "Battery Assault",
    "img": "/apps/dota2/images/dota_react/abilities/rattletrap_battery_assault.png",
    "desc": "Discharges high-powered shrapnel at random nearby enemy units, dealing minor magical damage and ministun.",
    "behavior": [
      "No Target",
      "Instant Cast"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "24",
      "22",
      "20",
      "18"
    ],
    "mc": "90",
    "dmg": [
      "20",
      "45",
      "70",
      "95"
    ]
  },
  "grimstroke_ink_creature": {
    "dname": "Phantom's Embrace",
    "img": "/apps/dota2/images/dota_react/abilities/grimstroke_ink_creature.png",
    "desc": "Summons a phantom that moves quickly towards the target, latching to it when she arrives. Once latched, the phantom damages and silences. If she survives the full latch duration she rends her victim for heavy damage and refreshes Phantom's Embrace's cooldown.\n\nHero attacks against the phantom count as 3 attacks each.",
    "behavior": "Unit Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "30",
      "26",
      "22",
      "18"
    ],
    "mc": [
      "80",
      "100",
      "120",
      "140"
    ]
  },
  "earth_spirit_geomagnetic_grip": {
    "dname": "Geomagnetic Grip",
    "img": "/apps/dota2/images/dota_react/abilities/earth_spirit_geomagnetic_grip.png",
    "desc": "Earth Spirit pulls the target Stone Remnant or Allied Unit. Enemies struck by the gripped target will be silenced.\n\nPulled Remnants also deal damage to struck enemies.\n\nCast range is reduced when targeting an ally.",
    "behavior": [
      "Point Target",
      "Unit Target"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": "13",
    "mc": "75"
  },
  "visage_stone_form_self_cast": {
    "dname": "Stone Form",
    "img": "/apps/dota2/images/dota_react/abilities/visage_stone_form_self_cast.png",
    "desc": "Orders the Familiar closest to Visage to cast Stone Form in its current location, turning into stone and smashing into the ground, stunning and damaging all targets in the area. The Familiar becomes invulnerable, and will regain its health very rapidly. After 6 seconds, the Familiar will automatically leave Stone Form.\n\n Can be alt-cast to order the closest Familiar to the target location to move there and cast Stone Form.",
    "behavior": [
      "No Target",
      "Instant Cast"
    ],
    "bkbpierce": "No",
    "cd": "0",
    "mc": "0",
    "dmg": [
      "60",
      "100",
      "140"
    ]
  },
  "medusa_cold_blooded": {
    "dname": "Cold Blooded",
    "img": "/apps/dota2/images/dota_react/abilities/medusa_cold_blooded.png",
    "desc": "When Medusa is targeted with a spell, a single-target Mystic Snake is sent back towards the enemy that turns them into stone for 1s.",
    "behavior": [
      "Passive",
      "Hidden"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": "12",
    "dmg": "0"
  },
  "mars_spear": {
    "dname": "Spear of Mars",
    "img": "/apps/dota2/images/dota_react/abilities/mars_spear.png",
    "desc": "Mars throws his legendary Spear with deadly precision, damaging each enemy unit it strikes. The first enemy hero it hits is skewered on the spear, pushing it back. If a skewered hero hits a tree, building, or cliff, they will be impaled to it and stunned.",
    "behavior": "Point Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "14",
      "13",
      "12",
      "11"
    ],
    "mc": [
      "100",
      "110",
      "120",
      "130"
    ],
    "dmg": [
      "100",
      "175",
      "250",
      "325"
    ]
  },
  "centaur_stampede": {
    "dname": "Stampede",
    "img": "/apps/dota2/images/dota_react/abilities/centaur_stampede.png",
    "desc": "Centaur leads all allies into a vicious charge causing them to move through units at max speed and slow any enemy units they trample. Trampled enemies take damage based on Centaur Warrunner's strength. Each enemy can be trampled once.",
    "behavior": [
      "No Target",
      "Instant Cast"
    ],
    "dmg_type": "Magical",
    "cd": [
      "100",
      "95",
      "90"
    ],
    "mc": [
      "150",
      "200",
      "250"
    ]
  },
  "queenofpain_scream_of_pain": {
    "dname": "Scream Of Pain",
    "img": "/apps/dota2/images/dota_react/abilities/queenofpain_scream_of_pain.png",
    "desc": "The Queen of Pain lets loose a piercing scream around her, damaging nearby enemies.",
    "behavior": "No Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "7.5",
      "7",
      "6.5",
      "6"
    ],
    "mc": "120",
    "dmg": [
      "75",
      "150",
      "225",
      "300"
    ]
  },
  "phoenix_sun_ray_stop": {
    "dname": "Stop Sun Ray",
    "img": "/apps/dota2/images/dota_react/abilities/phoenix_sun_ray_stop.png",
    "desc": "Immediately stops the Sun Ray.",
    "behavior": [
      "No Target",
      "Hidden",
      "Instant Cast"
    ]
  },
  "troll_warlord_fervor": {
    "dname": "Fervor",
    "img": "/apps/dota2/images/dota_react/abilities/troll_warlord_fervor.png",
    "desc": "With each continuous blow on the same target, Troll gains increased attack speed. If Troll changes targets, the stacks drop to zero.",
    "behavior": "Passive"
  },
  "centaur_hoof_stomp": {
    "dname": "Hoof Stomp",
    "img": "/apps/dota2/images/dota_react/abilities/centaur_hoof_stomp.png",
    "desc": "After a brief windup, Centaur Warrunner slams the ground, stunning and damaging nearby enemy units. During the delay, he is disarmed but can move.",
    "behavior": [
      "No Target",
      "Instant Cast"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "18",
      "16",
      "14",
      "12"
    ],
    "mc": [
      "100",
      "110",
      "120",
      "130"
    ]
  },
  "tiny_grow": {
    "dname": "Grow",
    "img": "/apps/dota2/images/dota_react/abilities/tiny_grow.png",
    "desc": "Tiny gains craggy mass, increasing his attack damage, movement speed and armor, and toss power while slowing his attack speed.",
    "behavior": "Passive",
    "dmg_type": "Physical"
  },
  "tiny_craggy_exterior": {
    "dname": "Craggy Exterior",
    "img": "/apps/dota2/images/dota_react/abilities/tiny_craggy_exterior.png",
    "desc": "Enemies that attack Tiny receive a stacking debuff that lowers their attack damage with each stack.",
    "behavior": "Passive",
    "dmg_type": "Magical",
    "dmg": "0"
  },
  "shadow_shaman_shackles": {
    "dname": "Shackles",
    "img": "/apps/dota2/images/dota_react/abilities/shadow_shaman_shackles.png",
    "desc": "CHANNELED - Magically binds an enemy unit so that it cannot move or attack, absorbing their life energy over time.",
    "behavior": [
      "Unit Target",
      "Channeled"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "14",
      "13",
      "12",
      "11"
    ],
    "mc": [
      "125",
      "140",
      "155",
      "170"
    ]
  },
  "dazzle_nothl_projection_end": {
    "dname": "End Projection",
    "img": "/apps/dota2/images/dota_react/abilities/dazzle_nothl_projection_end.png",
    "desc": "Ends Dazzle's sojourn in the Nothl Realm and returns his spirit to his body.",
    "behavior": [
      "No Target",
      "Hidden"
    ]
  },
  "ogre_magi_ignite": {
    "dname": "Ignite",
    "img": "/apps/dota2/images/dota_react/abilities/ogre_magi_ignite.png",
    "desc": "Drenches the target and another random unit in volatile chemicals, causing it to burst into flames. The target is in immense pain, taking damage and moving more slowly.",
    "behavior": [
      "Unit Target",
      "AOE"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": "17",
    "mc": [
      "80",
      "90",
      "100",
      "110"
    ]
  },
  "ancient_apparition_ice_blast": {
    "dname": "Ice Blast",
    "img": "/apps/dota2/images/dota_react/abilities/ancient_apparition_ice_blast.png",
    "desc": "Launches a tracer toward any location on the battlefield, which must be triggered again to mark the area to be blasted by a damaging explosion of hail. The further the tracer travels, the larger the explosion will be. Enemies caught in the explosion, or who touch the icy ball of hail as it travels, are Frostbitten, gaining Death Rime Stacks and prevented from regenerating or healing. If a Frostbitten unit's health drops below a certain percentage, they will instantly shatter.",
    "behavior": [
      "Point Target",
      "AOE"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "Yes",
    "cd": [
      "60",
      "50",
      "40"
    ],
    "mc": "175",
    "dmg": [
      "250",
      "325",
      "400"
    ]
  },
  "visage_summon_familiars_stone_form": {
    "dname": "Stone Form",
    "img": "/apps/dota2/images/dota_react/abilities/visage_summon_familiars_stone_form.png",
    "desc": "After a short delay, the Familiar turns into stone and smashes into the ground, stunning and damaging all targets in the area. The Familiar becomes invulnerable, and will regain its health very rapidly. After 6 seconds, the Familiar will automatically leave Stone Form. \n\n Can be alt-cast to order the Familiar to move to the target location and cast Stone Form.",
    "behavior": [
      "No Target",
      "Instant Cast"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": "11",
    "dmg": [
      "60",
      "100",
      "140"
    ]
  },
  "marci_special_delivery": {
    "dname": "Special Delivery",
    "img": "/apps/dota2/images/dota_react/abilities/marci_special_delivery.png",
    "desc": "Marci whistles to instantly summon her courier to her.\n\nPassively grants all allied couriers 3 bonus levels and 1 bonus health.",
    "behavior": "No Target",
    "cd": "240"
  },
  "omniknight_purification": {
    "dname": "Purification",
    "img": "/apps/dota2/images/dota_react/abilities/omniknight_purification.png",
    "desc": "Instantly heals a friendly unit and damages all nearby enemy units.",
    "behavior": [
      "Unit Target",
      "AOE"
    ],
    "dmg_type": "Pure",
    "cd": [
      "15",
      "14",
      "13",
      "12"
    ],
    "mc": [
      "90",
      "105",
      "120",
      "135"
    ]
  },
  "jakiro_liquid_fire": {
    "dname": "Liquid Fire",
    "img": "/apps/dota2/images/dota_react/abilities/jakiro_liquid_fire.png",
    "desc": "Jakiro burns his enemies in an area of effect with fire added to his attack, while slowing their attacks. Shares a cooldown with Liquid Frost.",
    "behavior": [
      "Unit Target",
      "Autocast",
      "Attack Modifier"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "13",
      "10",
      "7",
      "4"
    ]
  },
  "dazzle_shallow_grave": {
    "dname": "Shallow Grave",
    "img": "/apps/dota2/images/dota_react/abilities/dazzle_shallow_grave.png",
    "desc": "An ally blessed with Shallow Grave, no matter how close to death, cannot die while under its protection. Healing on that ally is also amplified for the duration based on the hero's HP.",
    "behavior": "Unit Target",
    "bkbpierce": "Yes",
    "cd": [
      "30",
      "26",
      "22",
      "18"
    ],
    "mc": [
      "90",
      "100",
      "110",
      "120"
    ]
  },
  "morphling_morph_str": {
    "dname": "Attribute Shift (Strength Gain)",
    "img": "/apps/dota2/images/dota_react/abilities/morphling_morph_str.png",
    "desc": "Morphling shifts its form, pulling points from Agility and pouring them into Strength. The process is reversible. Additional points in Attribute Shift increase the rate of stat change.",
    "behavior": "No Target",
    "cd": "0"
  },
  "ancient_apparition_chilling_touch": {
    "dname": "Chilling Touch",
    "img": "/apps/dota2/images/dota_react/abilities/ancient_apparition_chilling_touch.png",
    "desc": "Enhances Ancient Apparition's attack with increased range and heavy magic damage. Applies a Death Rime Stack that lasts for 3 seconds. Additionally applies a 100% slow for 0.7 seconds.",
    "behavior": [
      "Unit Target",
      "Autocast",
      "Attack Modifier"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "12",
      "9",
      "6",
      "3"
    ],
    "mc": [
      "45",
      "50",
      "55",
      "60"
    ],
    "dmg": [
      "30",
      "60",
      "90",
      "120"
    ]
  },
  "morphling_replicate": {
    "dname": "Morph",
    "img": "/apps/dota2/images/dota_react/abilities/morphling_replicate.png",
    "desc": "Morphling changes his form to match the targeted enemy, gaining their basic abilities. Can be toggled for the duration of the ability.",
    "behavior": "Unit Target",
    "bkbpierce": "Yes",
    "cd": [
      "140",
      "100",
      "60"
    ],
    "mc": "50"
  },
  "venomancer_venomous_gale": {
    "dname": "Venomous Gale",
    "img": "/apps/dota2/images/dota_react/abilities/venomancer_venomous_gale.png",
    "desc": "Launches a ball of venom in a line, poisoning enemy units so that they take both initial damage and damage over time, as well as suffering slowed movement. Venomous Gale deals damage every 3 seconds over its duration.",
    "behavior": [
      "AOE",
      "Point Target"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "21",
      "20",
      "19",
      "18"
    ],
    "mc": [
      "95",
      "105",
      "115",
      "125"
    ]
  },
  "visage_grave_chill": {
    "dname": "Grave Chill",
    "img": "/apps/dota2/images/dota_react/abilities/visage_grave_chill.png",
    "desc": "Visage drains the movement and attack speed of the targeted unit, gaining it for itself and nearby familiars.",
    "behavior": [
      "Unit Target",
      "AOE"
    ],
    "bkbpierce": "No",
    "cd": [
      "17",
      "15",
      "13",
      "11"
    ],
    "mc": "75"
  },
  "muerta_supernatural": {
    "dname": "Supernatural",
    "img": "/apps/dota2/images/dota_react/abilities/muerta_supernatural.png",
    "behavior": "Passive"
  },
  "chen_divine_favor": {
    "dname": "Divine Favor",
    "img": "/apps/dota2/images/dota_react/abilities/chen_divine_favor.png",
    "desc": "Passively provides an aura that grants increased health regeneration. Can be cast on allies to provide them with bonus armor and increasing the healing and health regeneration they receive.\n\nIf cast on Chen, all units controlled by Chen receive the buff and will be teleported to him. Taking damage from enemy heroes or their units will cancel the teleport.",
    "behavior": "Unit Target",
    "bkbpierce": "Yes",
    "cd": [
      "20",
      "18",
      "16",
      "14",
      ""
    ],
    "mc": "75"
  },
  "wisp_essence_conduction": {
    "dname": "Wellspring",
    "img": "/apps/dota2/images/dota_react/abilities/wisp_essence_conduction.png",
    "desc": "Io regenerates from consumables and certain items 2x faster.",
    "behavior": "Passive"
  },
  "abyssal_underlord_pit_of_malice": {
    "dname": "Pit of Malice",
    "img": "/apps/dota2/images/dota_react/abilities/abyssal_underlord_pit_of_malice.png",
    "desc": "A deadly pit is conjured at the target location; any unit that enters will be damaged and rooted. Each enemy unit within the pit are affected by the root only every 3.6 seconds.",
    "behavior": [
      "Point Target",
      "AOE"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "30",
      "25",
      "20",
      "15"
    ],
    "mc": [
      "110",
      "120",
      "130",
      "140"
    ]
  },
  "leshrac_lightning_storm": {
    "dname": "Lightning Storm",
    "img": "/apps/dota2/images/dota_react/abilities/leshrac_lightning_storm.png",
    "desc": "Summons a lightning storm that blasts the target enemy unit, then strikes any nearby enemy units. Struck enemies have their move speed slowed.",
    "behavior": "Unit Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": "4",
    "mc": [
      "80",
      "100",
      "120",
      "140"
    ],
    "dmg": [
      "90",
      "140",
      "190",
      "240"
    ]
  },
  "techies_land_mines": {
    "dname": "Proximity Mines",
    "img": "/apps/dota2/images/dota_react/abilities/techies_land_mines.png",
    "desc": "Plant an invisible mine that cannot be detected by True Sight, but is visible if an enemy is within the active 500 AoE of the mine. Mines detonate if an enemy is standing within the active AoE for 1 seconds dealing damage and temporarily reducing the enemy's Magic Resistance. The explosion deals full damage if the target is within 150 radius and decreases up to 60% on the edge. Deals 30% damage to buildings.",
    "behavior": [
      "Point Target",
      "AOE"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": "0",
    "mc": [
      "110",
      "140",
      "170"
    ],
    "dmg": [
      "400",
      "575",
      "750"
    ]
  },
  "shredder_chakram": {
    "dname": "Chakram",
    "img": "/apps/dota2/images/dota_react/abilities/shredder_chakram.png",
    "desc": "Fires Timbersaw's main saw blade at the target location where it will spin in place, dealing damage in an area around it. Enemies caught in the saw blade will move more slowly for every 5% of health missing. The blade deals damage and cuts down trees in its path when fired and retracted. While active the ability costs mana, and Timbersaw loses the ability to attack.",
    "behavior": [
      "Point Target",
      "AOE"
    ],
    "dmg_type": "Pure",
    "bkbpierce": "No",
    "cd": "8",
    "mc": [
      "100",
      "140",
      "180"
    ]
  },
  "venomancer_poison_sting": {
    "dname": "Poison Sting",
    "img": "/apps/dota2/images/dota_react/abilities/venomancer_poison_sting.png",
    "desc": "Adds poison damage to Venomancer's normal attacks and slowing movement speed.",
    "behavior": "Passive",
    "dmg_type": "Magical",
    "bkbpierce": "No"
  },
  "omniknight_degen_aura": {
    "dname": "Degen Aura",
    "img": "/apps/dota2/images/dota_react/abilities/omniknight_degen_aura.png",
    "desc": "Degenerates the movement capabilities of enemy units that stray too near.",
    "behavior": "Passive",
    "bkbpierce": "No"
  },
  "warlock_eldritch_summoning": {
    "dname": "Eldritch Summoning",
    "img": "/apps/dota2/images/dota_react/abilities/warlock_eldritch_summoning.png",
    "desc": "Whenever an enemy unit dies while afflicted by one or more of Warlock's abilities, a minor imp is summoned that lasts for 15 seconds and explodes on death. Imps will automatically seek out nearby units, favoring fatally bonded heroes, and will explode when reaching their prey.",
    "behavior": "Passive",
    "dmg_type": "Magical",
    "bkbpierce": "No"
  },
  "chen_hand_of_god": {
    "dname": "Hand of God",
    "img": "/apps/dota2/images/dota_react/abilities/chen_hand_of_god.png",
    "desc": "Heals all allied heroes on the map as well as all units under Chen's control. A large heal is applied at first and a slow heal over time is applied for 10 seconds afterwards.",
    "behavior": "No Target",
    "bkbpierce": "Yes",
    "cd": [
      "150",
      "130",
      "110"
    ],
    "mc": [
      "200",
      "300",
      "400"
    ]
  },
  "wisp_spirits": {
    "dname": "Spirits",
    "img": "/apps/dota2/images/dota_react/abilities/wisp_spirits.png",
    "desc": "Summon five particle spirits that dance in a circle around Io. If a particle collides with an enemy hero, it explodes, damaging all enemy units in an area around it. Creeps take minor damage from touching a particle spirit, but do not cause them to explode. When its duration ends, any remaining Spirits explode.",
    "behavior": [
      "No Target",
      "Instant Cast"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": "15",
    "mc": [
      "90",
      "100",
      "110",
      "120"
    ]
  },
  "muerta_gunslinger": {
    "dname": "Gunslinger",
    "img": "/apps/dota2/images/dota_react/abilities/muerta_gunslinger.png",
    "behavior": [
      "No Target",
      "Instant Cast"
    ]
  },
  "phoenix_supernova": {
    "dname": "Supernova",
    "img": "/apps/dota2/images/dota_react/abilities/phoenix_supernova.png",
    "desc": "The Phoenix willingly ends its current life for the chance to be reborn. Transforms into a burning sun that scorches enemies in a huge area. The sun can be destroyed by attacks from enemy Heroes. After 6 seconds the sun explodes, stunning all nearby enemies while restoring Phoenix to full health and mana with refreshed abilities.\n\nDISPEL TYPE: Strong Dispel",
    "behavior": "No Target",
    "dmg_type": "Magical",
    "bkbpierce": "Yes",
    "cd": "120",
    "mc": [
      "150",
      "200",
      "250"
    ]
  },
  "doom_bringer_empty1": {
    "dname": "Devoured Ability",
    "img": "/apps/dota2/images/dota_react/abilities/doom_bringer_empty1.png",
    "desc": "This slot will be replaced with abilities acquired using Devour.",
    "behavior": "Passive"
  },
  "lion_impale": {
    "dname": "Earth Spike",
    "img": "/apps/dota2/images/dota_react/abilities/lion_impale.png",
    "desc": "Rock spikes burst from the earth along a straight path. Enemy units are hurled into the air, then are stunned and take damage when they fall.",
    "behavior": [
      "Point Target",
      "Unit Target"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "14",
      "13",
      "12",
      "11"
    ],
    "mc": [
      "90",
      "110",
      "130",
      "150"
    ],
    "dmg": [
      "105",
      "170",
      "235",
      "300"
    ]
  },
  "pudge_flesh_heap": {
    "dname": "Meat Shield",
    "img": "/apps/dota2/images/dota_react/abilities/pudge_flesh_heap.png",
    "desc": "Pudge covers himself with a layer of flesh that blocks damage of any type taken from any source.",
    "behavior": [
      "No Target",
      "Instant Cast"
    ],
    "cd": [
      "20",
      "19",
      "18",
      "17"
    ],
    "mc": [
      "50",
      "60",
      "70",
      "80"
    ]
  },
  "warlock_shadow_word": {
    "dname": "Shadow Word",
    "img": "/apps/dota2/images/dota_react/abilities/warlock_shadow_word.png",
    "desc": "Warlock whispers an incantation, casting a spell on a unit that makes it deal damage to nearby enemy units and heal nearby ally units. Target Unit will also heal or be damaged depending on whether they are ally or enemy.",
    "behavior": "Unit Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "15",
      "14",
      "13",
      "12"
    ],
    "mc": [
      "110",
      "120",
      "130",
      "140"
    ]
  },
  "pugna_nether_ward": {
    "dname": "Nether Ward",
    "img": "/apps/dota2/images/dota_react/abilities/pugna_nether_ward.png",
    "desc": "Pugna places a Nether Ward at the target location. The ward will fire at any enemy hero who casts a spell dealing base damage plus the damage multiplier of the mana spent by the enemy hero.",
    "behavior": "Point Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": "40",
    "mc": "80"
  },
  "brewmaster_drunken_brawler": {
    "dname": "Drunken Brawler",
    "img": "/apps/dota2/images/dota_react/abilities/brewmaster_drunken_brawler.png",
    "desc": "Brewmaster can switch stances based on the elements he controls.\n\nWhenever Brewmaster casts an ability, he becomes Brewed Up, increasing his stance power by 150% for 5s. If he casts another ability while Brewed Up, the duration is extended by 1s. After Brewed Up expires, he is hungover and cannot Brew Up again for 9s.\n\nEarth Brawler gains bonus Magic Resistance and Armor.\n\nStorm Brawler gains bonus Evasion and Movement Speed.\n\nFire Brawler gains bonus Attack Speed and chance to critical strike.",
    "behavior": [
      "No Target",
      "Instant Cast"
    ],
    "cd": "0",
    "mc": "0"
  },
  "faceless_void_time_lock": {
    "dname": "Time Lock",
    "img": "/apps/dota2/images/dota_react/abilities/faceless_void_time_lock.png",
    "desc": "Adds the chance for an attack to lock an enemy unit in time while attacking it a second time.",
    "behavior": "Passive",
    "dmg_type": "Magical",
    "bkbpierce": "Yes"
  },
  "ringmaster_spotlight": {
    "dname": "Spotlight",
    "img": "/apps/dota2/images/dota_react/abilities/ringmaster_spotlight.png",
    "desc": "Ringmaster shines 3 spotlights that sweep over an area. Enemies in the light have a chance to miss their attacks and are revealed if invisible. Illusions hit by the beam fade away, losing a percentage of their maximum health each second. These effects linger for 0.3 seconds after leaving the light.",
    "behavior": [
      "Point Target",
      "AOE"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": "30",
    "mc": "50"
  },
  "disruptor_kinetic_field": {
    "dname": "Kinetic Field",
    "img": "/apps/dota2/images/dota_react/abilities/disruptor_kinetic_field.png",
    "desc": "After a short formation time, creates a circular barrier of kinetic energy that enemies can't pass.",
    "behavior": [
      "Point Target",
      "AOE"
    ],
    "bkbpierce": "No",
    "cd": [
      "20",
      "18",
      "16",
      "14"
    ],
    "mc": "70"
  },
  "gyrocopter_homing_missile": {
    "dname": "Homing Missile",
    "img": "/apps/dota2/images/dota_react/abilities/gyrocopter_homing_missile.png",
    "desc": "Fires a homing missile to seek the targeted enemy unit. The missile gains speed over time, dealing damage and stunning when it impacts the target. Enemy units can destroy the missile before it reaches its target.",
    "behavior": "Unit Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "30",
      "24",
      "18",
      "12"
    ],
    "mc": [
      "120",
      "130",
      "140",
      "150"
    ],
    "dmg": [
      "90",
      "180",
      "270",
      "360"
    ]
  },
  "drow_ranger_multishot": {
    "dname": "Multishot",
    "img": "/apps/dota2/images/dota_react/abilities/drow_ranger_multishot.png",
    "desc": "CHANNELED - Drow releases a flurry of arrows in continuous salvos, hitting enemies for extra damage and applying Frost Arrows. Lasts up to 1.75 seconds.",
    "behavior": [
      "Point Target",
      "Channeled"
    ],
    "dmg_type": "Physical",
    "bkbpierce": "Yes",
    "cd": [
      "24",
      "21",
      "18",
      "15"
    ],
    "mc": [
      "50",
      "70",
      "90",
      "110"
    ]
  },
  "obsidian_destroyer_arcane_orb": {
    "dname": "Arcane Orb",
    "img": "/apps/dota2/images/dota_react/abilities/obsidian_destroyer_arcane_orb.png",
    "desc": "Adds extra pure damage to Outworld Destroyer's attacks, based on his remaining mana pool.",
    "behavior": [
      "Unit Target",
      "Autocast",
      "Attack Modifier"
    ],
    "dmg_type": "Pure",
    "bkbpierce": "No",
    "cd": [
      "4.5",
      "3",
      "1.5",
      "0"
    ],
    "mc": "0"
  },
  "nyx_assassin_burrow": {
    "dname": "Burrow",
    "img": "/apps/dota2/images/dota_react/abilities/nyx_assassin_burrow.png",
    "desc": "Nyx Assassin buries himself beneath the battlefield over a short duration. Once burrowed, Spiked Carapace instantly stuns nearby enemies when cast, the range of Mind Flare and Impale is increased, and Impale's cooldown is decreased. While burrowed, Nyx Assassin is stationary, unable to attack, and invisible. Nyx Assassin gains damage reduction from all damage sources.",
    "behavior": [
      "No Target",
      "Hidden"
    ]
  },
  "mars_gods_rebuke": {
    "dname": "God's Rebuke",
    "img": "/apps/dota2/images/dota_react/abilities/mars_gods_rebuke.png",
    "desc": "Mars smashes enemies in front of him with his shield, knocking them back and damaging them with a critical hit based on his attack. Bonus damage is added when hitting heroes. Has True Strike.",
    "behavior": "Point Target",
    "dmg_type": "Physical",
    "cd": [
      "16",
      "14",
      "12",
      "10"
    ],
    "mc": "90"
  },
  "undying_ceaseless_dirge": {
    "dname": "Ceaseless Dirge",
    "img": "/apps/dota2/images/dota_react/abilities/undying_ceaseless_dirge.png",
    "behavior": "Passive",
    "cd": "480"
  },
  "elder_titan_ancestral_spirit": {
    "dname": "Astral Spirit",
    "img": "/apps/dota2/images/dota_react/abilities/elder_titan_ancestral_spirit.png",
    "desc": "Elder Titan sends forth his Astral Spirit, damaging any units it passes through. When the spirit rejoins the Titan, it grants bonus damage, armor, and movement speed for each unit it passed through.\n\nThe Astral Spirit possesses the Echo Stomp, Return Spirit, and Natural Order abilities.",
    "behavior": [
      "Point Target",
      "AOE"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "Yes",
    "cd": [
      "23",
      "21",
      "19",
      "17"
    ],
    "mc": [
      "80",
      "90",
      "100",
      "110"
    ],
    "dmg": "50"
  },
  "treant_natures_guise": {
    "dname": "Nature's Guise",
    "img": "/apps/dota2/images/dota_react/abilities/treant_natures_guise.png",
    "desc": "Grants bonus movement speed when near trees. Treant Protector additionally has Tree Walking if he has not taken damage for 2.75 seconds. While Tree Walking, Nature's Guise can be activated to grant Treant invisibility until he attacks or is no longer near a tree.",
    "behavior": "Passive",
    "cd": "50"
  },
  "keeper_of_the_light_blinding_light": {
    "dname": "Blinding Light",
    "img": "/apps/dota2/images/dota_react/abilities/keeper_of_the_light_blinding_light.png",
    "desc": "A blinding light flashes over the targeted area, knocking back and blinding the units in the area, causing them to miss some attacks. Knockback is 400 range over 0.6 seconds.",
    "behavior": [
      "AOE",
      "Point Target"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "24",
      "21",
      "18",
      "15"
    ],
    "mc": [
      "120",
      "130",
      "140",
      "150"
    ],
    "dmg": [
      "90",
      "140",
      "190",
      "240"
    ]
  },
  "bloodseeker_bloodrage": {
    "dname": "Bloodrage",
    "img": "/apps/dota2/images/dota_react/abilities/bloodseeker_bloodrage.png",
    "desc": "Drives Bloodseeker or an allied hero into a bloodthirsty rage which causes them to attack faster and deal more spell damage at the cost of a percentage of their health per second. Provides half attack speed to allied heroes.",
    "behavior": "Unit Target",
    "dmg_type": "Pure",
    "bkbpierce": "No",
    "cd": [
      "14",
      "12",
      "10",
      "8"
    ],
    "mc": "0"
  },
  "jakiro_liquid_ice": {
    "dname": "Liquid Frost",
    "img": "/apps/dota2/images/dota_react/abilities/jakiro_liquid_ice.png",
    "desc": "Jakiro chill his enemies with ice added to his attack, slowing movement for 5 seconds and increasing damage taken from Jakiro's attacks and abilities. This effect does not apply to buildings. Shares a cooldown with Liquid Fire.",
    "behavior": [
      "Unit Target",
      "Autocast",
      "Attack Modifier"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "13",
      "10",
      "7",
      "4"
    ]
  },
  "enigma_midnight_pulse": {
    "dname": "Midnight Pulse",
    "img": "/apps/dota2/images/dota_react/abilities/enigma_midnight_pulse.png",
    "desc": "Steeps an area in dark resonance, dealing damage to enemies every 0.5s.",
    "behavior": [
      "AOE",
      "Point Target"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "Yes",
    "cd": [
      "40",
      "35",
      "30",
      "25"
    ],
    "mc": [
      "65",
      "90",
      "115",
      "140"
    ]
  },
  "oracle_purifying_flames": {
    "dname": "Purifying Flames",
    "img": "/apps/dota2/images/dota_react/abilities/oracle_purifying_flames.png",
    "desc": "Burns away impurities, dealing heavy magic damage to the target before causing them to regenerate health over time. The amount of health regenerated over its duration exceeds the amount of initial damage. Can be cast on enemies and allies.",
    "behavior": "Unit Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": "2.5",
    "mc": "75",
    "dmg": [
      "90",
      "180",
      "270",
      "360"
    ]
  },
  "mirana_invis": {
    "dname": "Moonlight Shadow",
    "img": "/apps/dota2/images/dota_react/abilities/mirana_invis.png",
    "desc": "Turns Mirana and all allied heroes invisible and grants bonus movement speed. Mirana gains bonus outgoing damage during the duration. If a hero is revealed, invisibility will restore after the fade delay as long as Moonlight Shadow's duration has not expired.",
    "behavior": "No Target",
    "bkbpierce": "Yes",
    "cd": [
      "120",
      "110",
      "100"
    ],
    "mc": "125"
  },
  "enchantress_natures_attendants": {
    "dname": "Nature's Attendants",
    "img": "/apps/dota2/images/dota_react/abilities/enchantress_natures_attendants.png",
    "desc": "A cloud of wisps heals Enchantress and any friendly units nearby.",
    "behavior": "No Target",
    "bkbpierce": "Yes",
    "cd": "35",
    "mc": "140"
  },
  "kez_falcon_rush": {
    "dname": "Falcon Rush",
    "img": "/apps/dota2/images/dota_react/abilities/kez_falcon_rush.png",
    "desc": "Kez gains the ability to rush towards enemy targets to deliver echoing secondary attacks. While in this state, Kez has phased collision and slow resistance.",
    "behavior": [
      "Hidden",
      "No Target",
      "Instant Cast"
    ],
    "cd": [
      "21",
      "18",
      "15",
      "12"
    ],
    "mc": [
      "85",
      "90",
      "95",
      "100"
    ]
  },
  "phoenix_icarus_dive": {
    "dname": "Icarus Dive",
    "img": "/apps/dota2/images/dota_react/abilities/phoenix_icarus_dive.png",
    "desc": "Phoenix dives forward in an arc with a fixed distance in the targeted direction, dealing damage over time and slowing the movement speed of any units it comes into contact with, and then orbiting back to its original position. If Phoenix casts Supernova, the dive ends.",
    "behavior": "Point Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "40",
      "35",
      "30",
      "25"
    ],
    "mc": "0"
  },
  "clinkz_burning_barrage": {
    "dname": "Burning Barrage",
    "img": "/apps/dota2/images/dota_react/abilities/clinkz_burning_barrage.png",
    "desc": "CHANNELED - Clinkz channels and shoots multiple piercing arrows in the target direction that hit all enemy units dealing a percentage of Clinkz' attack damage and applying attack modifiers.",
    "behavior": [
      "Point Target",
      "Channeled"
    ],
    "dmg_type": "Physical",
    "bkbpierce": "Yes",
    "cd": "17",
    "mc": "40"
  },
  "alchemist_unstable_concoction": {
    "dname": "Unstable Concoction",
    "img": "/apps/dota2/images/dota_react/abilities/alchemist_unstable_concoction.png",
    "desc": "Alchemist brews up an unstable concoction that he can throw at an enemy hero, to stun and deal damage in an area around the explosion. The longer the concoction brews, the more damage it deals and the longer the stun. Alchemist is faster while charging the concoction. After 5 seconds, the brew reaches its maximum damage and stun time. However, after 5.5 seconds, the concoction will explode on Alchemist himself if not thrown.",
    "behavior": [
      "No Target",
      "Instant Cast"
    ],
    "dmg_type": "Physical",
    "bkbpierce": "No",
    "cd": "17",
    "mc": "100"
  },
  "puck_puckish": {
    "dname": "Puckish",
    "img": "/apps/dota2/images/dota_react/abilities/puck_puckish.png",
    "desc": "Whenever Puck disjoints an attack, it restores 10 + 2% of its max mana and 10 + 2% of its max health. Dodging a targeted spell projectile restores 3.5x that amount. Does not apply to attacks by Towers.",
    "behavior": "Passive"
  },
  "pangolier_lucky_shot": {
    "dname": "Lucky Shot",
    "img": "/apps/dota2/images/dota_react/abilities/pangolier_lucky_shot.png",
    "desc": "Pangolier rolls the dice and lets fate decide the outcome for his enemies. Grants a chance to drastically slow their attack speed and reduce armor on any damage dealt by Pangolier's attacks or abilities.",
    "behavior": "Passive",
    "bkbpierce": "No"
  },
  "batrider_sticky_napalm": {
    "dname": "Sticky Napalm",
    "img": "/apps/dota2/images/dota_react/abilities/batrider_sticky_napalm.png",
    "desc": "Drenches an area in sticky oil, amplifying damage from Batrider's attacks and abilities and slowing the movement speed and turn rate of enemies. Additional casts of Sticky Napalm continue to increase damage, up to 20 stacks. Applies a small amount of damage with each cast.",
    "behavior": [
      "AOE",
      "Point Target"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": "3",
    "mc": "22"
  },
  "legion_commander_press_the_attack": {
    "dname": "Press The Attack",
    "img": "/apps/dota2/images/dota_react/abilities/legion_commander_press_the_attack.png",
    "desc": "Removes debuffs and disables from the target friendly unit, and grants bonus movement speed and health regen for a short time.\n\nDISPEL TYPE: Strong Dispel",
    "behavior": "Unit Target",
    "bkbpierce": "No",
    "cd": [
      "16",
      "15",
      "14",
      "13"
    ],
    "mc": "100"
  },
  "beastmaster_drums_of_slom": {
    "dname": "Drums of Slom",
    "img": "/apps/dota2/images/dota_react/abilities/beastmaster_drums_of_slom.png",
    "desc": "Attacks from Beastmaster or a nearby unit he controls will cause him bang his drum, dealing damage to nearby units and healing Beastmaster and units under his control for a portion of the damage dealt. Every attack decreases the interval between drum hits down to a minimum of 0.5s between hits after 20 attacks. If no attacks are made, the intervals gradually increase.\n\nUsing Primal Roar counts as 10 attacks.",
    "behavior": "Passive",
    "dmg_type": "Magical",
    "bkbpierce": "No"
  },
  "snapfire_firesnap_cookie": {
    "dname": "Firesnap Cookie",
    "img": "/apps/dota2/images/dota_react/abilities/snapfire_firesnap_cookie.png",
    "desc": "Snapfire feeds a potent cookie to Mortimer or an ally, causing them to hop a short distance. The hopping unit stuns and damages enemies in the landing zone.",
    "behavior": "Unit Target",
    "dmg_type": "Magical",
    "cd": [
      "18",
      "17",
      "16",
      "15"
    ],
    "mc": "105"
  },
  "keeper_of_the_light_illuminate_end": {
    "dname": "Release Illuminate",
    "img": "/apps/dota2/images/dota_react/abilities/keeper_of_the_light_illuminate_end.png",
    "desc": "Release the channel early.",
    "behavior": [
      "No Target",
      "Hidden"
    ]
  },
  "dark_seer_aggrandize": {
    "dname": "Aggrandize",
    "img": "/apps/dota2/images/dota_react/abilities/dark_seer_aggrandize.png",
    "desc": "When Dark Seer levels up, he restores a percentage of his max health and mana. Restore percentage is equal to 10% + 1.5% per hero level.",
    "behavior": "Passive"
  },
  "mars_dauntless": {
    "dname": "Dauntless",
    "img": "/apps/dota2/images/dota_react/abilities/mars_dauntless.png",
    "desc": "Mars gets more HP Regen the more he and his allies are outnumbered by enemy heroes in 700 radius.",
    "behavior": "Passive"
  },
  "bristleback_hairball": {
    "dname": "Hairball",
    "img": "/apps/dota2/images/dota_react/abilities/bristleback_hairball.png",
    "desc": "Coughs a quill-packed hairball towards the target location. Erupts at the location, hitting enemies with Viscous Nasal Goo stacks and Quill Spray.",
    "behavior": [
      "Point Target",
      "AOE",
      "Hidden"
    ],
    "bkbpierce": "Yes",
    "cd": "13",
    "mc": "60"
  },
  "sandking_burrowstrike": {
    "dname": "Burrowstrike",
    "img": "/apps/dota2/images/dota_react/abilities/sandking_burrowstrike.png",
    "desc": "Sand King burrows into the ground and tunnels forward, damaging and stunning enemy units above him as he resurfaces. Adds Caustic Finale poison to heroes hit\n\n Can be put on alt-cast to immediately cast in the desired direction, without walking towards the targeted location.",
    "behavior": "Point Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "14",
      "13",
      "12",
      "11"
    ],
    "mc": [
      "100",
      "110",
      "120",
      "130"
    ],
    "dmg": [
      "80",
      "150",
      "220",
      "290"
    ]
  },
  "marci_unleash": {
    "dname": "Unleash",
    "img": "/apps/dota2/images/dota_react/abilities/marci_unleash.png",
    "desc": "Marci taps a hidden power, gaining Fury charges that allow her to deliver a rapid sequence of strikes that slow movement and attack speed of the target for 2s. The last strike in every Fury combo creates a damaging pulse around the target. In between Fury combos, Marci is unable to attack for 1.5s.\n\nMarci gains 15% movement speed when Unleash is cast.",
    "behavior": "No Target",
    "dmg_type": "Magical",
    "cd": [
      "90",
      "75",
      "60"
    ],
    "mc": [
      "100",
      "125",
      "150"
    ]
  },
  "puck_phase_shift": {
    "dname": "Phase Shift",
    "img": "/apps/dota2/images/dota_react/abilities/puck_phase_shift.png",
    "desc": "CHANNELED - Puck briefly shifts into another dimension where it is immune from harm.",
    "behavior": [
      "No Target",
      "Channeled"
    ],
    "cd": [
      "8",
      "7.5",
      "7",
      "6.5"
    ],
    "mc": "0"
  },
  "hoodwink_sharpshooter": {
    "dname": "Sharpshooter",
    "img": "/apps/dota2/images/dota_react/abilities/hoodwink_sharpshooter.png",
    "desc": "Hoodwink charges up and fires a deadly bolt from her crossbow, dealing heavy damage, break and slow to an enemy Hero. The damage and debuff duration scale up to max after x0.75 seconds, and the bolt is fired automatically after x0.75 seconds.\nHoodwink is knocked backwards for a distance of 350 from the force of the shot. Creeps hit by the bolt are damaged for half the values.",
    "behavior": "Point Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": "45",
    "mc": [
      "100",
      "150",
      "200"
    ]
  },
  "lycan_apex_predator": {
    "dname": "Apex Predator",
    "img": "/apps/dota2/images/dota_react/abilities/lycan_apex_predator.png",
    "desc": "Lycan and units he controls deal 2% extra damage to neutral creeps per hero level.",
    "behavior": "Passive"
  },
  "alchemist_acid_spray": {
    "dname": "Acid Spray",
    "img": "/apps/dota2/images/dota_react/abilities/alchemist_acid_spray.png",
    "desc": "Sprays high-pressure acid across a target area. Enemy units who step across the contaminated terrain take damage per second and have their armor reduced.",
    "behavior": [
      "Point Target",
      "AOE"
    ],
    "dmg_type": "Physical",
    "bkbpierce": "No",
    "cd": [
      "22",
      "21",
      "20",
      "19"
    ],
    "mc": "120"
  },
  "beastmaster_inner_beast": {
    "dname": "Inner Beast",
    "img": "/apps/dota2/images/dota_react/abilities/beastmaster_inner_beast.png",
    "desc": "Untaps the inner fury of Beastmaster and units he controls, passively increasing their attack speed.",
    "behavior": "Passive",
    "bkbpierce": "Yes",
    "cd": "0",
    "mc": "0"
  },
  "techies_minefield_sign": {
    "dname": "Minefield Sign",
    "img": "/apps/dota2/images/dota_react/abilities/techies_minefield_sign.png",
    "desc": "Plant a warning sign, causing Sticky Bombs and Proximity Mines within its radius to be invulnerable and deal 15% more damage. Only one sign can exist at a time. Lasts 60 seconds. ",
    "behavior": [
      "Point Target",
      "AOE"
    ],
    "cd": "60",
    "mc": "0"
  },
  "juggernaut_healing_ward": {
    "dname": "Healing Ward",
    "img": "/apps/dota2/images/dota_react/abilities/juggernaut_healing_ward.png",
    "desc": "Summons a Healing Ward which heals all nearby allied units, based on their max health. The Healing Ward moves at 325 movement speed after being summoned. Lasts 25 seconds.",
    "behavior": [
      "AOE",
      "Point Target"
    ],
    "bkbpierce": "Yes",
    "cd": "60",
    "mc": "120"
  },
  "rubick_telekinesis_land": {
    "dname": "Telekinesis Land",
    "img": "/apps/dota2/images/dota_react/abilities/rubick_telekinesis_land.png",
    "desc": "Chooses the location the target will land when Telekinesis finishes.",
    "behavior": [
      "Point Target",
      "Hidden",
      "Instant Cast",
      "AOE"
    ]
  },
  "pugna_decrepify": {
    "dname": "Decrepify",
    "img": "/apps/dota2/images/dota_react/abilities/pugna_decrepify.png",
    "desc": "A powerful banishing spell that slows a unit and renders it unable to attack or be attacked. Healing on affected allies is increased, while afflicted enemies take extra magic damage instead.",
    "behavior": "Unit Target",
    "bkbpierce": "No",
    "cd": [
      "16",
      "13",
      "10",
      "7"
    ],
    "mc": "80"
  },
  "legion_commander_moment_of_courage": {
    "dname": "Moment of Courage",
    "img": "/apps/dota2/images/dota_react/abilities/legion_commander_moment_of_courage.png",
    "desc": "When attacked, Legion Commander has a chance to immediately counterattack with bonus lifesteal.",
    "behavior": "Passive",
    "cd": [
      "1.7",
      "1.4",
      "1.1",
      "0.8"
    ]
  },
  "grimstroke_ink_trail": {
    "dname": "Ink Trail",
    "img": "/apps/dota2/images/dota_react/abilities/grimstroke_ink_trail.png",
    "desc": "Adds an effect to Grimstroke's attacks that causes enemy heroes to leave a trail of ink behind them for 4s.",
    "behavior": "Passive",
    "bkbpierce": "No"
  },
  "luna_moon_glaive": {
    "dname": "Moon Glaives",
    "img": "/apps/dota2/images/dota_react/abilities/luna_moon_glaive.png",
    "desc": "Empowers Luna's glaives, causing her attacks to bounce between enemy units. Deals less damage with each bounce.",
    "behavior": "Passive",
    "bkbpierce": "Yes"
  },
  "puck_dream_coil": {
    "dname": "Dream Coil",
    "img": "/apps/dota2/images/dota_react/abilities/puck_dream_coil.png",
    "desc": "Creates a coil of volatile magic that latches onto enemy Heroes, damaging and leashing them. If the enemy hero stretches the coil by moving too far away, it snaps, stunning and dealing additional damage.",
    "behavior": [
      "AOE",
      "Point Target"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": "75",
    "mc": [
      "125",
      "175",
      "225"
    ]
  },
  "shadow_shaman_mass_serpent_ward": {
    "dname": "Mass Serpent Ward",
    "img": "/apps/dota2/images/dota_react/abilities/shadow_shaman_mass_serpent_ward.png",
    "desc": "Summons 10 Serpent Wards to attack enemy units and structures. The Wards are immune to magic. Creeps deal half damage to the Serpent Ward.",
    "behavior": [
      "Point Target",
      "AOE"
    ],
    "dmg_type": "Physical",
    "bkbpierce": "Yes",
    "cd": [
      "110",
      "105",
      "100"
    ],
    "mc": [
      "200",
      "350",
      "550"
    ]
  },
  "chaos_knight_reality_rift": {
    "dname": "Reality Rift",
    "img": "/apps/dota2/images/dota_react/abilities/chaos_knight_reality_rift.png",
    "desc": "Teleports Chaos Knight, any illusions he has, and the target unit to a point along the line between him and the target. Reduces armor of the enemy unit for 6 seconds.",
    "behavior": "Unit Target",
    "bkbpierce": "No",
    "cd": [
      "18",
      "14",
      "10",
      "6"
    ],
    "mc": "50"
  },
  "invoker_empty1": {
    "dname": "Invoked Spell",
    "img": "/apps/dota2/images/dota_react/abilities/invoker_empty1.png",
    "desc": "Casting Invoke will replace this slot with one of ten unique spells based on Invoker's currently active Quas, Wex, and Exort buffs.",
    "behavior": "Passive"
  },
  "gyrocopter_chop_shop": {
    "dname": "Chop Shop",
    "img": "/apps/dota2/images/dota_react/abilities/gyrocopter_chop_shop.png",
    "desc": "Gyrocopter can disassemble most items.",
    "behavior": "Passive"
  },
  "enigma_demonic_conversion": {
    "dname": "Demonic Summoning",
    "img": "/apps/dota2/images/dota_react/abilities/enigma_demonic_conversion.png",
    "desc": "Summons three fragments of Enigma himself at the cost of health. The eidolons health is increased by 3% of Enigma's current health. These eidolons are all under Enigma's control, and repeated successful attacks cause them to multiply. When this happens, the eidolons have their health restored.",
    "behavior": "Point Target",
    "dmg_type": "Physical",
    "cd": [
      "40",
      "38",
      "36",
      "34"
    ],
    "mc": [
      "70",
      "80",
      "90",
      "100"
    ]
  },
  "zuus_arc_lightning": {
    "dname": "Arc Lightning",
    "img": "/apps/dota2/images/dota_react/abilities/zuus_arc_lightning.png",
    "desc": "Hurls a bolt of lightning that leaps through nearby enemy units that deal damage.",
    "behavior": "Unit Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": "1.6",
    "mc": "75 85 95 105"
  },
  "riki_blink_strike": {
    "dname": "Blink Strike",
    "img": "/apps/dota2/images/dota_react/abilities/riki_blink_strike.png",
    "desc": "Teleports behind the target unit, momentarily slowing them and attacking them with bonus damage if it is an enemy.",
    "behavior": "Unit Target",
    "dmg_type": "Physical",
    "bkbpierce": "Yes",
    "cd": [
      "13",
      "10",
      "7",
      "4"
    ],
    "mc": [
      "50",
      "55",
      "60",
      "65"
    ]
  },
  "beastmaster_primal_roar": {
    "dname": "Primal Roar",
    "img": "/apps/dota2/images/dota_react/abilities/beastmaster_primal_roar.png",
    "desc": "Beastmaster lets loose a deafening roar that stuns, and shoves open a path to its target. All units in the path of the roar are damaged, while units shoved aside by the roar have their movement and attack speed slowed. Additionally, Beastmaster and his units gain 40% movement speed for 2 seconds.",
    "behavior": "Unit Target",
    "dmg_type": "Magical",
    "bkbpierce": "Yes",
    "cd": [
      "90",
      "75",
      "60"
    ],
    "mc": [
      "100",
      "125",
      "150"
    ],
    "dmg": [
      "150",
      "225",
      "300"
    ]
  },
  "dawnbreaker_fire_wreath": {
    "dname": "Starbreaker",
    "img": "/apps/dota2/images/dota_react/abilities/dawnbreaker_fire_wreath.png",
    "desc": "Dawnbreaker whirls her hammer around 3 times, damaging enemies with her attack plus bonus damage. On the final strike, she smashes her hammer down, stunning and damaging enemies in front of her.",
    "behavior": "Point Target",
    "dmg_type": "Physical",
    "bkbpierce": "Yes",
    "cd": [
      "17",
      "15",
      "13",
      "11"
    ],
    "mc": "100"
  },
  "zuus_static_field": {
    "dname": "Static Field",
    "img": "/apps/dota2/images/dota_react/abilities/zuus_static_field.png",
    "desc": "Zeus shocks any enemy that he attacks or is hit by his abilities, causing damage equal to a percentage of their current health.",
    "behavior": [
      "Passive",
      "Hidden"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No"
  },
  "earthshaker_aftershock": {
    "dname": "Aftershock",
    "img": "/apps/dota2/images/dota_react/abilities/earthshaker_aftershock.png",
    "desc": "Causes the earth to shake underfoot, adding additional damage and stuns to nearby enemy units when Earthshaker casts his abilities.",
    "behavior": "Passive",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "dmg": [
      "65",
      "90",
      "115",
      "140"
    ]
  },
  "templar_assassin_trap": {
    "dname": "Trap",
    "img": "/apps/dota2/images/dota_react/abilities/templar_assassin_trap.png",
    "desc": "Springs the trap nearest to Templar Assassin, slowing nearby enemies. \n\nIf the ability is in alt-cast state, springs the trap that is closest to the mouse cursor.",
    "behavior": [
      "No Target",
      "Instant Cast"
    ],
    "bkbpierce": "No",
    "cd": "0.5",
    "mc": "0"
  },
  "leshrac_defilement": {
    "dname": "Defilement",
    "img": "/apps/dota2/images/dota_react/abilities/leshrac_defilement.png",
    "behavior": "Passive"
  },
  "pangolier_rollup_stop": {
    "dname": "End Roll Up",
    "img": "/apps/dota2/images/dota_react/abilities/pangolier_rollup_stop.png",
    "desc": "Ends Pangolier's Roll Up early.",
    "behavior": [
      "No Target",
      "Hidden",
      "Instant Cast"
    ]
  },
  "queenofpain_succubus": {
    "dname": "Succubus",
    "img": "/apps/dota2/images/dota_react/abilities/queenofpain_succubus.png",
    "desc": "All sources of Spell Lifesteal also apply to Pure Damage. Queen of Pain gains Spell Lifesteal that increases with proximity to her enemies. Lifesteal is at its maximum when the enemy is 150 units or closer to her and at its minimum when the enemy is 800 units or further from her.",
    "behavior": "Passive"
  },
  "invoker_exort": {
    "dname": "Exort",
    "img": "/apps/dota2/images/dota_react/abilities/invoker_exort.png",
    "desc": "Allows manipulation of fire elements. Active Exort instances imbue Invoker with bonus attack damage. Passively grants bonus intelligence per level of Exort.",
    "behavior": [
      "No Target",
      "Instant Cast"
    ],
    "cd": "0",
    "mc": "0"
  },
  "enchantress_untouchable": {
    "dname": "Untouchable",
    "img": "/apps/dota2/images/dota_react/abilities/enchantress_untouchable.png",
    "desc": "Enchantress beguiles her enemies, slowing their attacks when she is attacked.",
    "behavior": "Passive",
    "bkbpierce": "Yes"
  },
  "centaur_double_edge": {
    "dname": "Double Edge",
    "img": "/apps/dota2/images/dota_react/abilities/centaur_double_edge.png",
    "desc": "Centaur strikes a mighty blow at melee range, damaging both himself and a small area around the target. Deals extra damage based on your strength. Centaur cannot die from Double Edge.",
    "behavior": [
      "Unit Target",
      "AOE"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": "3.5",
    "mc": "0",
    "dmg": [
      "120",
      "180",
      "240",
      "300"
    ]
  },
  "largo_frogstomp": {
    "dname": "Frogstomp",
    "img": "/apps/dota2/images/dota_react/abilities/largo_frogstomp.png",
    "desc": "Largo tosses froglings to an area. They stomp the ground every 1 second, dealing damage and ministuns, and enemies in the area have reduced movement speed.",
    "behavior": [
      "Point Target",
      "AOE"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "20",
      "18",
      "16",
      "14"
    ],
    "mc": [
      "85",
      "95",
      "105",
      "115"
    ]
  },
  "sandking_sand_storm": {
    "dname": "Sand Storm",
    "img": "/apps/dota2/images/dota_react/abilities/sandking_sand_storm.png",
    "desc": "Sand King creates a fearsome sandstorm that damages enemy units and grants Sand King Invisibility while he is in it. The effect ends when Sand King leaves the area.",
    "behavior": "No Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "40",
      "34",
      "28",
      "22"
    ],
    "mc": "85"
  },
  "broodmother_spin_web": {
    "dname": "Spin Web",
    "img": "/apps/dota2/images/dota_react/abilities/broodmother_spin_web.png",
    "desc": "Spins a large web that grants Broodmother a passive movement speed increase and increases her Turn Rate, while in its vicinity, as well as giving free movement.\n\nSpin Web can be cast from anywhere as long as the new web touches an existing web. Webs never expire, and can be manually destroyed. When the maximum limit of webs is exceeded, the oldest web disappears.",
    "behavior": [
      "Point Target",
      "AOE"
    ],
    "cd": "0",
    "mc": "40"
  },
  "meepo_poof": {
    "dname": "Poof",
    "img": "/apps/dota2/images/dota_react/abilities/meepo_poof.png",
    "desc": "Drawing mystical energies from the earth, a Meepo can teleport to another Meepo or itself after channeling for 1.5 seconds, damaging the enemy in both the departure and arrival locations. \n\nIf the ability is in alt-cast state, all Meepos will also cast Poof to the target. When cast on the ground, all Meepos except the selected one will Poof to the closest location.",
    "behavior": "Point Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "12",
      "10",
      "8",
      "6"
    ],
    "mc": "80",
    "dmg": [
      "50",
      "80",
      "110",
      "140"
    ]
  },
  "shredder_whirling_death": {
    "dname": "Whirling Death",
    "img": "/apps/dota2/images/dota_react/abilities/shredder_whirling_death.png",
    "desc": "Timbersaw whirls extremely sharp edges, damaging enemies and destroying trees around him in an area. If an enemy hero is affected, it loses some of its primary attribute for a short duration. Whirling Death will deal bonus damage per tree destroyed.",
    "behavior": [
      "No Target",
      "Instant Cast"
    ],
    "dmg_type": "Pure",
    "bkbpierce": "No",
    "cd": [
      "7.5",
      "7",
      "6.5",
      "6"
    ],
    "mc": "100",
    "dmg": [
      "85",
      "130",
      "175",
      "220"
    ]
  },
  "spirit_breaker_bulldoze": {
    "dname": "Bulldoze",
    "img": "/apps/dota2/images/dota_react/abilities/spirit_breaker_bulldoze.png",
    "desc": "Spirit Breaker gains movement speed and status resistance to ram through enemies. Can be used while charging.",
    "behavior": [
      "No Target",
      "Instant Cast"
    ],
    "cd": [
      "22",
      "20",
      "18",
      "16"
    ],
    "mc": [
      "30",
      "40",
      "50",
      "60"
    ]
  },
  "slardar_sprint": {
    "dname": "Guardian Sprint",
    "img": "/apps/dota2/images/dota_react/abilities/slardar_sprint.png",
    "desc": "Slardar slithers ahead, moving significantly faster and passing through units.",
    "behavior": [
      "No Target",
      "Instant Cast"
    ],
    "cd": [
      "29",
      "25",
      "21",
      "17"
    ],
    "mc": "25"
  },
  "terrorblade_sunder": {
    "dname": "Sunder",
    "img": "/apps/dota2/images/dota_react/abilities/terrorblade_sunder.png",
    "desc": "Severs the life from both Terrorblade and a target hero, exchanging a percentage of both units' current health. Some health points must remain.",
    "behavior": "Unit Target",
    "bkbpierce": "No",
    "cd": [
      "120",
      "80",
      "40"
    ],
    "mc": [
      "100",
      "75",
      "50"
    ]
  },
  "abyssal_underlord_firestorm": {
    "dname": "Firestorm",
    "img": "/apps/dota2/images/dota_react/abilities/abyssal_underlord_firestorm.png",
    "desc": "Calls down waves of fire that damage enemy units in the target area, burning for additional damage over time.",
    "behavior": [
      "Point Target",
      "AOE"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "16",
      "15",
      "14",
      "13"
    ],
    "mc": [
      "110",
      "125",
      "140",
      "155"
    ]
  },
  "weaver_the_swarm": {
    "dname": "The Swarm",
    "img": "/apps/dota2/images/dota_react/abilities/weaver_the_swarm.png",
    "desc": "Weaver launches a swarm of 12 young Weavers that latch on any enemy unit in their path, attacking and reducing armor until it is killed.",
    "behavior": "Point Target",
    "dmg_type": "Physical",
    "bkbpierce": "No",
    "cd": [
      "44",
      "36",
      "28",
      "20"
    ],
    "mc": "110"
  },
  "void_spirit_dissimilate": {
    "dname": "Dissimilate",
    "img": "/apps/dota2/images/dota_react/abilities/void_spirit_dissimilate.png",
    "desc": "Void Spirit temporarily fades into the aether, creating a number of portals through which he can reassemble himself. Upon exiting a portal, he damages all enemies in the area.",
    "behavior": "No Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "20",
      "17",
      "14",
      "11"
    ],
    "mc": "120",
    "dmg": [
      "120",
      "200",
      "280",
      "360"
    ]
  },
  "queenofpain_shadow_strike": {
    "dname": "Shadow Strike",
    "img": "/apps/dota2/images/dota_react/abilities/queenofpain_shadow_strike.png",
    "desc": "Hurls a poisoned dagger which deals large initial damage, and then deals damage over time. The poisoned unit has its movement speed slowed for 16 seconds. An instance of damage is dealt every 3 seconds.",
    "behavior": "Unit Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "13",
      "10",
      "7",
      "4"
    ],
    "mc": [
      "100",
      "110",
      "120",
      "130"
    ]
  },
  "invoker_emp": {
    "dname": "E.M.P.",
    "img": "/apps/dota2/images/dota_react/abilities/invoker_emp.png",
    "desc": "Invoker builds up a charge of electromagnetic energy at a targeted location which automatically detonates after 2.9 seconds. The detonation covers an area, draining mana based on the level of Wex. Deals damage for each point of mana drained. If EMP drains mana from an enemy hero, Invoker gains 25% of the mana drained.",
    "behavior": [
      "Point Target",
      "Hidden",
      "AOE"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": "27",
    "mc": "125"
  },
  "dawnbreaker_converge": {
    "dname": "Converge",
    "img": "/apps/dota2/images/dota_react/abilities/dawnbreaker_converge.png",
    "desc": "Dawnbreaker recalls her hammer, pulling them together so they meet in the middle.",
    "behavior": [
      "No Target",
      "Hidden",
      "Instant Cast"
    ],
    "bkbpierce": "No",
    "cd": "0.25",
    "mc": "0"
  },
  "ember_spirit_activate_fire_remnant": {
    "dname": "Activate Fire Remnant",
    "img": "/apps/dota2/images/dota_react/abilities/ember_spirit_activate_fire_remnant.png",
    "desc": "Select the Fire Remnant to arrive at.",
    "behavior": "Point Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": "0",
    "mc": [
      "100",
      "125",
      "150"
    ],
    "dmg": [
      "100",
      "200",
      "300"
    ]
  },
  "spirit_breaker_charge_of_darkness": {
    "dname": "Charge of Darkness",
    "img": "/apps/dota2/images/dota_react/abilities/spirit_breaker_charge_of_darkness.png",
    "desc": "Spirit Breaker fixes his sight on an enemy unit and starts charging through all objects, starting at 25% of the bonus speed and reaching his max speed after 1.5s.\n\nAll enemy units passed through and the targeted unit will be hit by a Greater Bash. If the targeted unit dies, Spirit Breaker will change his target to the nearest enemy unit to that location.",
    "behavior": "Unit Target",
    "bkbpierce": "No",
    "cd": [
      "22",
      "19",
      "16",
      "13"
    ],
    "mc": [
      "90",
      "100",
      "110",
      "120"
    ]
  },
  "phantom_lancer_phantom_edge": {
    "dname": "Phantom Rush",
    "img": "/apps/dota2/images/dota_react/abilities/phantom_lancer_phantom_edge.png",
    "desc": "When targeting an enemy for an attack, Phantom Lancer quickly charges into range, gaining bonus movement speed and evasion. Phantom Lancer's illusions also have this ability.",
    "behavior": [
      "Instant Cast",
      "No Target"
    ],
    "dmg_type": "Physical",
    "cd": [
      "15",
      "11",
      "7",
      "3"
    ]
  },
  "huskar_life_break": {
    "dname": "Life Break",
    "img": "/apps/dota2/images/dota_react/abilities/huskar_life_break.png",
    "desc": "Huskar draws upon his health to break an enemy's life, leaping at a target to shatter a percentage of that hero's current health and slow both their movement and attack speed. While leaping, Huskar is Debuff Immune and has 60% increased magic resistance.\n\nDISPEL TYPE: Basic Dispel",
    "behavior": "Unit Target",
    "dmg_type": "Magical",
    "bkbpierce": "Yes",
    "cd": [
      "16",
      "14",
      "12"
    ],
    "mc": "0"
  },
  "axe_counter_helix": {
    "dname": "Counter Helix",
    "img": "/apps/dota2/images/dota_react/abilities/axe_counter_helix.png",
    "desc": "After a set number of attacks, Axe will perform a helix counter attack, dealing pure damage to all nearby enemies.",
    "behavior": "Passive",
    "dmg_type": "Pure",
    "bkbpierce": "Yes",
    "cd": "0.3",
    "dmg": [
      "100",
      "120",
      "140",
      "160"
    ]
  },
  "pudge_rot": {
    "dname": "Rot",
    "img": "/apps/dota2/images/dota_react/abilities/pudge_rot.png",
    "desc": "A toxic cloud that deals intense damage and slows movement--harming not only enemy units but Pudge himself.",
    "behavior": "No Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "dmg": [
      "30",
      "60",
      "90",
      "120"
    ]
  },
  "lina_dragon_slave": {
    "dname": "Dragon Slave",
    "img": "/apps/dota2/images/dota_react/abilities/lina_dragon_slave.png",
    "desc": "Lina channels the breath of a dragon, sending out a wave of fire that scorches every enemy in its path.",
    "behavior": [
      "Unit Target",
      "Point Target"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "11",
      "10",
      "9",
      "8"
    ],
    "mc": [
      "100",
      "110",
      "120",
      "130"
    ],
    "dmg": [
      "85",
      "165",
      "245",
      "325"
    ]
  },
  "snapfire_mortimer_kisses": {
    "dname": "Mortimer Kisses",
    "img": "/apps/dota2/images/dota_react/abilities/snapfire_mortimer_kisses.png",
    "desc": "Snapfire's friend launches a barrage of firespit globs over 5.5 seconds. Globs cause impact damage and create pools of firespit, which slow and apply damage over time. Snapfire has a reduced turn rate for the duration and a minimum launch range of 600. Each glob can be targeted with a right click.",
    "behavior": [
      "Point Target",
      "AOE"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "120",
      "110",
      "100"
    ],
    "mc": [
      "125",
      "150",
      "175"
    ]
  },
  "nevermore_shadowraze1": {
    "dname": "Shadowraze",
    "img": "/apps/dota2/images/dota_react/abilities/nevermore_shadowraze1.png",
    "desc": "Shadow Fiend razes the ground directly in front of him, dealing damage to enemy units in the area. Adds a stacking damage amplifier on the target that causes the enemy to take bonus Shadowraze damage per stack.",
    "behavior": "No Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": "9",
    "mc": "80"
  },
  "silencer_last_word": {
    "dname": "Last Word",
    "img": "/apps/dota2/images/dota_react/abilities/silencer_last_word.png",
    "desc": "Enchants a target, providing vision of them and causing them to be damaged and silenced if they cast a spell or if the enchantment timer expires. Deals extra damage based on the difference in intelligence between Silencer and the target.",
    "behavior": "Unit Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "22",
      "18",
      "14",
      "10"
    ],
    "mc": [
      "100",
      "105",
      "110",
      "115"
    ]
  },
  "invoker_alacrity": {
    "dname": "Alacrity",
    "img": "/apps/dota2/images/dota_react/abilities/invoker_alacrity.png",
    "desc": "Invoker infuses an ally with an immense surge of energy, increasing their attack speed based on the level of Wex and their damage based on the level of Exort.",
    "behavior": [
      "Unit Target",
      "Hidden"
    ],
    "dmg_type": "Physical",
    "bkbpierce": "Yes",
    "cd": "15",
    "mc": "75"
  },
  "medusa_mana_shield": {
    "dname": "Mana Shield",
    "img": "/apps/dota2/images/dota_react/abilities/medusa_mana_shield.png",
    "desc": "Creates a shield that absorbs 98% of incoming damage in exchange for Medusa's mana that increases with each level of Medusa. Illusions absorb 60% less damage per point of mana.",
    "behavior": [
      "No Target",
      "Passive"
    ]
  },
  "techies_reactive_tazer": {
    "dname": "Reactive Tazer",
    "img": "/apps/dota2/images/dota_react/abilities/techies_reactive_tazer.png",
    "desc": "Techies trigger an electric charge giving them bonus movement speed for a short period of time. Enemies attacking Techies are temporarily disarmed and get a Basic Dispel. At the end of the effect, the charge explodes, disarming all enemies within the radius.",
    "behavior": "No Target",
    "bkbpierce": "No",
    "cd": [
      "26",
      "22",
      "18",
      "14"
    ],
    "mc": "60"
  },
  "broodmother_incapacitating_bite": {
    "dname": "Incapacitating Bite",
    "img": "/apps/dota2/images/dota_react/abilities/broodmother_incapacitating_bite.png",
    "desc": "Broodmother's venom cripples enemy units, causing her attacks to slow and giving the affected unit a chance to miss its attacks and extra damage from attacks.",
    "behavior": "Passive",
    "bkbpierce": "No"
  },
  "treant_eyes_in_the_forest": {
    "dname": "Eyes In The Forest",
    "img": "/apps/dota2/images/dota_react/abilities/treant_eyes_in_the_forest.png",
    "desc": "Treant Protector enchants a tree, which grants him unobstructed vision in that location. The eyes last for 300 seconds and are invisible, but are destroyed if their host tree is destroyed or if they are attacked directly.",
    "behavior": [
      "Unit Target",
      "Hidden"
    ],
    "mc": "30"
  },
  "dark_willow_pixie_dust": {
    "dname": "Pixie Dust",
    "img": "/apps/dota2/images/dota_react/abilities/dark_willow_pixie_dust.png",
    "desc": "Whenever a skill makes Dark Willow become untargetable, she gains +150% HP Regen and +150% Mana Regen while in that state.",
    "behavior": "Passive"
  },
  "broodmother_sticky_snare": {
    "dname": "Spinner's Snare",
    "img": "/apps/dota2/images/dota_react/abilities/broodmother_sticky_snare.png",
    "behavior": [
      "Point Target",
      "Hidden",
      "Channeled"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "mc": "100"
  },
  "obsidian_destroyer_astral_imprisonment": {
    "dname": "Astral Imprisonment",
    "img": "/apps/dota2/images/dota_react/abilities/obsidian_destroyer_astral_imprisonment.png",
    "desc": "Places a target unit into an astral prison. The hidden unit is invulnerable and disabled. When the astral prison implodes, it deals damage to the target and steals a percentage of their max mana.",
    "behavior": [
      "Unit Target",
      "AOE"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "18",
      "16",
      "14",
      "12"
    ],
    "mc": "150",
    "dmg": [
      "90",
      "180",
      "270",
      "360"
    ]
  },
  "kez_kazurai_katana": {
    "dname": "Kazurai Katana",
    "img": "/apps/dota2/images/dota_react/abilities/kez_kazurai_katana.png",
    "desc": "Katana attacks and abilities apply a stacking damage over time to enemies that deals a percentage of the original attack's damage as additional damage over time. \n\nKez may activate the ability to impale the target with his attack, preventing them from moving or turning. The target's Katana debuff bursts, causing some of the stacks to deal damage instantly.",
    "behavior": [
      "Attack Modifier",
      "Unit Target"
    ],
    "dmg_type": "Physical",
    "bkbpierce": "Yes",
    "cd": [
      "20",
      "15",
      "10",
      "5"
    ],
    "mc": "40"
  },
  "largo_catchy_lick": {
    "dname": "Catchy Lick",
    "img": "/apps/dota2/images/dota_react/abilities/largo_catchy_lick.png",
    "desc": "Largo licks the targeted unit with his tongue, pulling it back a short distance, applying a basic dispel, and dealing damage if it's an enemy.\n\nDispelling an effect from a target grants Largo temporary health regeneration.\n\nDISPEL TYPE: Basic Dispel",
    "behavior": "Unit Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "13",
      "11",
      "9",
      "7"
    ],
    "mc": [
      "80",
      "85",
      "90",
      "95"
    ],
    "dmg": [
      "85",
      "170",
      "255",
      "340"
    ]
  },
  "bloodseeker_blood_bath": {
    "dname": "Blood Rite",
    "img": "/apps/dota2/images/dota_react/abilities/bloodseeker_blood_bath.png",
    "desc": "Bloodseeker baptizes an area in sacred blood. After 2.9 seconds the ritual completes, causing any enemies caught in the area to take damage and become silenced.",
    "behavior": [
      "AOE",
      "Point Target"
    ],
    "dmg_type": "Pure",
    "bkbpierce": "No",
    "cd": [
      "15",
      "14",
      "13",
      "12"
    ],
    "mc": [
      "90",
      "100",
      "110",
      "120"
    ],
    "dmg": [
      "100",
      "155",
      "210",
      "265"
    ]
  },
  "clinkz_burning_army": {
    "dname": "Burning Army",
    "img": "/apps/dota2/images/dota_react/abilities/clinkz_burning_army.png",
    "desc": "Summons a row of Burning Skeleton Archers in the target location.",
    "behavior": "Point Target",
    "dmg_type": "Physical",
    "cd": "70",
    "mc": "150"
  },
  "shadow_demon_demonic_cleanse": {
    "dname": "Demonic Cleanse",
    "img": "/apps/dota2/images/dota_react/abilities/shadow_demon_demonic_cleanse.png",
    "desc": "Cleanses the target allied unit, removing negative buffs for the duration. At the end of the duration, the unit is healed. Units under the effect of Disruption can still be affected by Demonic Cleanse.\n\nDISPEL TYPE: Basic Dispel",
    "behavior": "Unit Target",
    "bkbpierce": "Yes",
    "cd": "60",
    "mc": "150"
  },
  "rattletrap_hookshot": {
    "dname": "Hookshot",
    "img": "/apps/dota2/images/dota_react/abilities/rattletrap_hookshot.png",
    "desc": "Fires a grappling device rapidly at the target location. If the hook hits a unit, Clockwerk launches himself into the target, stunning and dealing damage to everyone in a 175 radius around the hit target. Any enemies Clockwerk collides with along the way are damaged and stunned.",
    "behavior": "Point Target",
    "dmg_type": "Magical",
    "bkbpierce": "Yes",
    "cd": [
      "60",
      "45",
      "30"
    ],
    "mc": [
      "100",
      "125",
      "150"
    ],
    "dmg": [
      "75",
      "175",
      "275"
    ]
  },
  "faceless_void_distortion_field": {
    "dname": "Distortion Field",
    "img": "/apps/dota2/images/dota_react/abilities/faceless_void_distortion_field.png",
    "desc": "Enemy Attack Projectiles within 600 radius are slowed by 35%.",
    "behavior": "Passive"
  },
  "viper_corrosive_skin": {
    "dname": "Corrosive Skin",
    "img": "/apps/dota2/images/dota_react/abilities/viper_corrosive_skin.png",
    "desc": "Viper exudes an infectious toxin that damages and slows the attack speed of any enemy that damages it in a 1200 radius. The acid exudate also increases Viper's resistance to magic.",
    "behavior": "Passive",
    "dmg_type": "Magical",
    "bkbpierce": "No"
  },
  "ursa_enrage": {
    "dname": "Enrage",
    "img": "/apps/dota2/images/dota_react/abilities/ursa_enrage.png",
    "desc": "Ursa goes into a frenzy, providing damage reduction and status resistance. Removes any existing debuffs.\n\nDISPEL TYPE: Strong Dispel",
    "behavior": [
      "No Target",
      "Instant Cast"
    ],
    "bkbpierce": "Yes",
    "cd": [
      "60",
      "45",
      "30"
    ],
    "mc": "0"
  },
  "troll_warlord_whirling_axes_ranged": {
    "dname": "Whirling Axes (Ranged)",
    "img": "/apps/dota2/images/dota_react/abilities/troll_warlord_whirling_axes_ranged.png",
    "desc": "Troll hurls a fistful of five axes in a cone shape over 950 range, slowing and damaging enemy units.",
    "behavior": [
      "Unit Target",
      "Point Target"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": "9"
  },
  "razor_unstable_current": {
    "dname": "Unstable Current",
    "img": "/apps/dota2/images/dota_react/abilities/razor_unstable_current.png",
    "behavior": "Passive"
  },
  "crystal_maiden_freezing_field_stop": {
    "dname": "Stop Freezing Field",
    "img": "/apps/dota2/images/dota_react/abilities/crystal_maiden_freezing_field_stop.png",
    "desc": "Immediately stops the Freezing Field",
    "behavior": [
      "No Target",
      "Hidden",
      "Instant Cast"
    ],
    "cd": "1"
  },
  "treant_overgrowth": {
    "dname": "Overgrowth",
    "img": "/apps/dota2/images/dota_react/abilities/treant_overgrowth.png",
    "desc": "Summons an overgrowth of vines and branches around Treant that deal damage to afflicted enemies and prevent them from moving, blinking, going invisible, or attacking.",
    "behavior": "No Target",
    "dmg_type": "Magical",
    "bkbpierce": "Yes",
    "cd": [
      "110",
      "100",
      "90"
    ],
    "mc": [
      "200",
      "250",
      "300"
    ]
  },
  "doom_bringer_scorched_earth": {
    "dname": "Scorched Earth",
    "img": "/apps/dota2/images/dota_react/abilities/doom_bringer_scorched_earth.png",
    "desc": "Carpets the nearby earth in flames which damage enemies, while also granting him increased movement speed.",
    "behavior": "No Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "41",
      "39",
      "37",
      "35"
    ],
    "mc": [
      "60",
      "70",
      "80",
      "90"
    ],
    "dmg": [
      "20",
      "35",
      "50",
      "65"
    ]
  },
  "undying_decay": {
    "dname": "Decay",
    "img": "/apps/dota2/images/dota_react/abilities/undying_decay.png",
    "desc": "Undying steals strength from all enemy heroes in an area, dealing base damage as he claims the enemy's strength for himself. Deals 2x damage to creeps.",
    "behavior": [
      "AOE",
      "Point Target"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "13",
      "10",
      "7",
      "4"
    ],
    "mc": "100"
  },
  "skywrath_mage_arcane_bolt": {
    "dname": "Arcane Bolt",
    "img": "/apps/dota2/images/dota_react/abilities/skywrath_mage_arcane_bolt.png",
    "desc": "Skywrath Mage launches a slow-moving bolt of arcane magic, dealing damage to an enemy unit based on Skywrath Mage's intelligence.",
    "behavior": "Unit Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "5",
      "4",
      "3",
      "2"
    ],
    "mc": "70"
  },
  "viper_nethertoxin": {
    "dname": "Nethertoxin",
    "img": "/apps/dota2/images/dota_react/abilities/viper_nethertoxin.png",
    "desc": "Viper releases a Nethertoxin at the targeted area. Units in that area take an increasing damage over time based on how long they remain in it. Units in it have their attack speed slowed.",
    "behavior": [
      "Point Target",
      "AOE"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": "14",
    "mc": "70"
  },
  "visage_soul_assumption": {
    "dname": "Soul Assumption",
    "img": "/apps/dota2/images/dota_react/abilities/visage_soul_assumption.png",
    "desc": "Visage gathers charges of soul essence each time nearby heroes take more than 100 damage. When the essence is released, it deals base damage as well as damage for each gathered soul charge.",
    "behavior": "Unit Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": "4",
    "mc": "110"
  },
  "vengefulspirit_nether_swap": {
    "dname": "Nether Swap",
    "img": "/apps/dota2/images/dota_react/abilities/vengefulspirit_nether_swap.png",
    "desc": "Instantaneously swaps positions with a target Hero, friend or enemy. Nether Swap interrupts channeling abilities on the target. Enemy Swapped units take damage. Vengeful Spirit and allied swapped units gain a barrier equal to the damage dealt.",
    "behavior": "Unit Target",
    "dmg_type": "Magical",
    "bkbpierce": "Yes",
    "cd": [
      "46",
      "38",
      "30"
    ],
    "mc": [
      "100",
      "150",
      "200"
    ]
  },
  "primal_beast_colossal": {
    "dname": "Colossal",
    "img": "/apps/dota2/images/dota_react/abilities/primal_beast_colossal.png",
    "behavior": "Passive"
  },
  "phantom_assassin_stifling_dagger": {
    "dname": "Stifling Dagger",
    "img": "/apps/dota2/images/dota_react/abilities/phantom_assassin_stifling_dagger.png",
    "desc": "Throws a dagger slowing the enemy unit's movement speed, dealing 65+30% of Phantom Assassin's attack damage as physical damage and applying attack effects from items and abilities.",
    "behavior": "Unit Target",
    "dmg_type": "Physical",
    "cd": "6",
    "mc": "30"
  },
  "windrunner_windrun": {
    "dname": "Windrun",
    "img": "/apps/dota2/images/dota_react/abilities/windrunner_windrun.png",
    "desc": "Increases movement speed and adds evasion from all physical attacks.",
    "behavior": [
      "No Target",
      "Instant Cast"
    ],
    "bkbpierce": "No",
    "cd": [
      "15",
      "14",
      "13",
      "12"
    ],
    "mc": "50"
  },
  "drow_ranger_glacier": {
    "dname": "Glacier",
    "img": "/apps/dota2/images/dota_react/abilities/drow_ranger_glacier.png",
    "desc": "Drow creates a hill of ice beneath her. While standing on the hill, attackers gain bonus attack range and high ground advantage - they cannot miss and gain flying vision. Drow additionally gets bonus Multishot arrows per wave while on the hill. The front of the hill obscures vision and cannot be moved through except by Drow. Does not interrupt Multishot when cast.",
    "behavior": "No Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": "20",
    "mc": "50"
  },
  "lone_druid_entangle": {
    "dname": "Entangle",
    "img": "/apps/dota2/images/dota_react/abilities/lone_druid_entangle.png",
    "desc": "Allows Lone Druid to Entangle enemies once they gain 5 stacks. Entangled enemies are rooted and take damage over time.\n\nWhen cast, applies 2 stacks to each enemy hero in the area and 5 stacks to enemy creeps. Also empowers Lone Druid for 10s, making him apply 1 stack with each attack on enemy heroes. Enemies cannot gain stacks while Entangled.\n\nLeveling this ability also levels Spirit Bear's Entangling Claws ability.",
    "behavior": [
      "Point Target",
      "AOE"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "Yes",
    "cd": [
      "24",
      "22",
      "20",
      "18"
    ],
    "mc": "60"
  },
  "marci_companion_run": {
    "dname": "Rebound",
    "img": "/apps/dota2/images/dota_react/abilities/marci_companion_run.png",
    "desc": "Marci bounds to the targeted allied unit, choosing a direction and distance she will spring away from it. Upon reaching the unit, Marci lunges to her final destination, damaging and stunning enemies in a 275 radius where she lands.\n\n The ally receives 15% bonus movement speed for 4s.",
    "behavior": "Unit Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "24",
      "20",
      "16",
      "12"
    ],
    "mc": [
      "70",
      "80",
      "90",
      "100"
    ]
  },
  "pangolier_gyroshell_stop": {
    "dname": "Stop Rolling",
    "img": "/apps/dota2/images/dota_react/abilities/pangolier_gyroshell_stop.png",
    "desc": "Halt!",
    "behavior": [
      "No Target",
      "Hidden",
      "Instant Cast"
    ]
  },
  "sven_vanquisher": {
    "dname": "Vanquisher",
    "img": "/apps/dota2/images/dota_react/abilities/sven_vanquisher.png",
    "desc": "Sven's attacks deal 20% bonus damage to stunned enemies.",
    "behavior": "Passive"
  },
  "skeleton_king_hellfire_blast": {
    "dname": "Wraithfire Blast",
    "img": "/apps/dota2/images/dota_react/abilities/skeleton_king_hellfire_blast.png",
    "desc": "Wraith King sears an enemy unit with spectral fire, dealing damage and stunning, then dealing damage over time and slowing the target.",
    "behavior": "Unit Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "14",
      "12",
      "10",
      "8"
    ],
    "mc": [
      "95",
      "110",
      "125",
      "140"
    ]
  },
  "shadow_shaman_fowl_play": {
    "dname": "Fowl Play",
    "img": "/apps/dota2/images/dota_react/abilities/shadow_shaman_fowl_play.png",
    "desc": "When taking lethal damage, Shadow Shaman receives a strong dispel and survives as a 1 HP chicken. Incoming damage is reduced to zero for 1s.Cooldown is reset upon respawning.\n\nDISPEL TYPE: Strong Dispel",
    "behavior": "Passive",
    "cd": "120"
  },
  "beastmaster_call_of_the_wild_hawk": {
    "dname": "Call of the Wild Hawk",
    "img": "/apps/dota2/images/dota_react/abilities/beastmaster_call_of_the_wild_hawk.png",
    "desc": "Beastmaster summons a hawk that circles around Beastmaster and dive-bombs at enemies with a base attack rate of every 4s, damaging and rooting them. Attack rate increases with the Hawk's attack speed. Prioritizes heroes. ",
    "behavior": "No Target",
    "dmg_type": "Magical",
    "cd": [
      "45",
      "40",
      "35",
      "30"
    ],
    "mc": "50"
  },
  "alchemist_goblins_greed": {
    "dname": "Greevil's Greed",
    "img": "/apps/dota2/images/dota_react/abilities/alchemist_goblins_greed.png",
    "desc": "Alchemist synthesizes additional gold from his enemies and bounty runes. With each kill, Alchemist earns base bonus gold and extra bonus gold. If Alchemist kills another unit which yields gold within the next 40 seconds, an additional instance of Extra Bonus Gold is added to the total. Additionally, causes bounty runes to yield more gold.",
    "behavior": "Passive"
  },
  "juggernaut_blade_dance": {
    "dname": "Blade Dance",
    "img": "/apps/dota2/images/dota_react/abilities/juggernaut_blade_dance.png",
    "desc": "Gives Juggernaut a chance to deal critical damage on each attack.",
    "behavior": "Passive"
  },
  "zuus_heavenly_jump": {
    "dname": "Heavenly Jump",
    "img": "/apps/dota2/images/dota_react/abilities/zuus_heavenly_jump.png",
    "desc": "Zeus performs a Heavenly Jump, leaping forward and shocking the closest visible nearby enemy (prioritizing heroes), dealing damage as well as reducing their movement and attack speed. Zeus gets 900 unobstructed vision around him for 3 seconds.",
    "behavior": [
      "No Target",
      "Instant Cast"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "26",
      "22",
      "18",
      "14"
    ],
    "mc": [
      "50",
      "60",
      "70",
      "80"
    ],
    "dmg": [
      "25",
      "50",
      "75",
      "100"
    ]
  },
  "furion_wrath_of_nature": {
    "dname": "Wrath of Nature",
    "img": "/apps/dota2/images/dota_react/abilities/furion_wrath_of_nature.png",
    "desc": "Damaging energy bounces around the map, striking enemies that are in vision starting with those closest to the cast point. Each enemy hit beyond the first adds damage, up to the maximum after 16 are hit.",
    "behavior": [
      "Unit Target",
      "Point Target"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": "85",
    "mc": [
      "130",
      "160",
      "190"
    ]
  },
  "wisp_tether_break": {
    "dname": "Break Tether",
    "img": "/apps/dota2/images/dota_react/abilities/wisp_tether_break.png",
    "desc": "Break the link to the tethered unit.",
    "behavior": [
      "Hidden",
      "No Target"
    ],
    "cd": "1"
  },
  "visage_lurker": {
    "dname": "Lurker",
    "img": "/apps/dota2/images/dota_react/abilities/visage_lurker.png",
    "desc": "Visage's ability cooldown durations are accelerated as long as he's not taking damage.\n\nGrants a stack every 2s that Visage does not take damage. Each stack grants 2% cooldown acceleration with a max of 8 stacks. Stacks fade after 2s upon taking any damage.",
    "behavior": "Passive"
  },
  "visage_gravekeepers_cloak": {
    "dname": "Gravekeeper's Cloak",
    "img": "/apps/dota2/images/dota_react/abilities/visage_gravekeepers_cloak.png",
    "desc": "Visage generates a layered barrier that protects him from damage. If he receives damage from a player, one layer is removed, and takes time to recover.",
    "behavior": "Passive"
  },
  "shredder_return_chakram": {
    "dname": "Return Chakram",
    "img": "/apps/dota2/images/dota_react/abilities/shredder_return_chakram.png",
    "desc": "Returns the Chakram to Timbersaw.",
    "behavior": [
      "No Target",
      "Instant Cast",
      "Hidden"
    ],
    "cd": "0"
  },
  "leshrac_split_earth": {
    "dname": "Split Earth",
    "img": "/apps/dota2/images/dota_react/abilities/leshrac_split_earth.png",
    "desc": "Splits the earth under enemies. Deals damage and stuns for a short duration.",
    "behavior": [
      "Point Target",
      "AOE"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": "11",
    "mc": [
      "80",
      "100",
      "120",
      "140"
    ],
    "dmg": [
      "115",
      "170",
      "225",
      "280"
    ]
  },
  "kunkka_torrent": {
    "dname": "Torrent",
    "img": "/apps/dota2/images/dota_react/abilities/kunkka_torrent.png",
    "desc": "Summons a rising torrent that, after a short delay, hurls enemy units into the sky, stunning, dealing damage and slowing movement speed.",
    "behavior": [
      "AOE",
      "Point Target"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "16",
      "14",
      "12",
      "10"
    ],
    "mc": "90",
    "dmg": [
      "110",
      "180",
      "250",
      "320"
    ]
  },
  "grimstroke_dark_portrait": {
    "dname": "Dark Portrait",
    "img": "/apps/dota2/images/dota_react/abilities/grimstroke_dark_portrait.png",
    "behavior": [
      "Unit Target",
      "Hidden"
    ],
    "bkbpierce": "Yes",
    "cd": "35",
    "mc": "200"
  },
  "phantom_lancer_spirit_lance": {
    "dname": "Spirit Lance",
    "img": "/apps/dota2/images/dota_react/abilities/phantom_lancer_spirit_lance.png",
    "desc": "Sends a magical spirit lance to a target enemy unit that damages and slows, while summoning an illusory phantom to attack the unit.",
    "behavior": "Unit Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "10",
      "9",
      "8",
      "7"
    ],
    "mc": "120"
  },
  "tiny_toss_tree": {
    "dname": "Tree Throw",
    "img": "/apps/dota2/images/dota_react/abilities/tiny_toss_tree.png",
    "desc": "Throws the tree at the target unit, proccing your attack on it and splashing damage around the target.",
    "behavior": [
      "Unit Target",
      "Point Target",
      "Hidden"
    ],
    "dmg_type": "Physical",
    "bkbpierce": "No"
  },
  "disruptor_electromagnetic_repulsion": {
    "dname": "Electromagnetic Repulsion",
    "img": "/apps/dota2/images/dota_react/abilities/disruptor_electromagnetic_repulsion.png",
    "desc": "Whenever Disruptor takes more than 250 damage from any source within 400 radius, all nearby enemies within are pushed back up to a 400 unit distance.",
    "cd": "5",
    "mc": "undefined"
  },
  "weaver_time_lapse": {
    "dname": "Time Lapse",
    "img": "/apps/dota2/images/dota_react/abilities/weaver_time_lapse.png",
    "desc": "Weaver warps backward to whatever position it was in five seconds earlier--regaining the HP and mana from that time. No effect on cooldown, gold or experience.\n\nDISPEL TYPE: Strong Dispel",
    "behavior": "No Target",
    "cd": [
      "70",
      "55",
      "40"
    ],
    "mc": [
      "150",
      "75",
      "0"
    ]
  },
  "ember_spirit_immolation": {
    "dname": "Immolation",
    "img": "/apps/dota2/images/dota_react/abilities/ember_spirit_immolation.png",
    "desc": "Ember Spirit is continuously burning, dealing damage per second to all nearby enemies at all times.",
    "behavior": "Passive",
    "dmg_type": "Magical",
    "bkbpierce": "No"
  },
  "lina_fiery_soul": {
    "dname": "Fiery Soul",
    "img": "/apps/dota2/images/dota_react/abilities/lina_fiery_soul.png",
    "desc": "Grants bonus attack and movement speed each time Lina hits an enemy with a spell. Stacks with itself. Lasts 18 seconds.",
    "behavior": "Passive"
  },
  "ember_spirit_sleight_of_fist": {
    "dname": "Sleight of Fist",
    "img": "/apps/dota2/images/dota_react/abilities/ember_spirit_sleight_of_fist.png",
    "desc": "Ember Spirit dashes around with blazing speed, attacking all enemies in the targeted area of effect, then returning to his start location. Deals bonus damage to heroes.",
    "behavior": [
      "Point Target",
      "AOE"
    ],
    "dmg_type": "Physical",
    "bkbpierce": "Yes",
    "cd": [
      "13",
      "11",
      "9",
      "7"
    ],
    "mc": [
      "60",
      "65",
      "70",
      "75"
    ]
  },
  "rattletrap_rocket_flare": {
    "dname": "Rocket Flare",
    "img": "/apps/dota2/images/dota_react/abilities/rattletrap_rocket_flare.png",
    "desc": "Fires a global range flare that explodes over a given area. Upon impact, enemies in the area take damage and are briefly slowed. Rocket flare provides vision over the impact area for 6 seconds.",
    "behavior": [
      "Point Target",
      "AOE"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "20",
      "18",
      "16",
      "14"
    ],
    "mc": [
      "35",
      "40",
      "45",
      "50"
    ],
    "dmg": [
      "80",
      "120",
      "160",
      "200"
    ]
  },
  "undying_tombstone": {
    "dname": "Tombstone",
    "img": "/apps/dota2/images/dota_react/abilities/undying_tombstone.png",
    "desc": "Summons a tombstone at the target point. Zombies will frequently spawn next to every enemy unit in the area around the Tombstone, and attack them. Zombies have the Deathlust ability, which causes their attacks to slow the target, and if the target reaches below a certain amount of health, increases the attack and movement speed of the zombie.",
    "behavior": "Point Target",
    "dmg_type": "Physical",
    "bkbpierce": "No",
    "cd": "80",
    "mc": [
      "125",
      "150",
      "175",
      "200"
    ]
  },
  "juggernaut_omni_slash": {
    "dname": "Omnislash",
    "img": "/apps/dota2/images/dota_react/abilities/juggernaut_omni_slash.png",
    "desc": "Juggernaut leaps towards the target enemy units, and then slashes the target and other nearby enemy units at an increased attack rate. Juggernaut is invulnerable for the duration.\n\nDISPEL TYPE: Basic Dispel",
    "behavior": "Unit Target",
    "dmg_type": "Physical",
    "bkbpierce": "Yes",
    "cd": "120",
    "mc": [
      "200",
      "275",
      "350"
    ]
  },
  "kez_switch_weapons": {
    "dname": "Switch Discipline",
    "img": "/apps/dota2/images/dota_react/abilities/kez_switch_weapons.png",
    "desc": "Kez switches between his Kazurai Katana and Shodo Sai.\n\nHe gains different attack capabilities and abilities based on the weapon equipped. The abilities level up together, and when an ability is used, the associated alternate weapon ability also goes on cooldown.",
    "behavior": [
      "No Target",
      "Instant Cast"
    ],
    "cd": "7.75"
  },
  "hoodwink_hunters_boomerang": {
    "dname": "Hunter's Boomerang",
    "img": "/apps/dota2/images/dota_react/abilities/hoodwink_hunters_boomerang.png",
    "desc": "Tosses a boomerang in an arc. Upon contact, it returns to Hoodwink. The boomerang will deal damage as it passes through or hits enemies, and apply a debuff that causes affected enemies to be slowed and be more vulnerable to spell damage.",
    "behavior": [
      "Point Target",
      "Unit Target",
      "Hidden"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": "18",
    "mc": "125",
    "dmg": "200"
  },
  "dazzle_nothl_projection": {
    "dname": "Nothl Projection",
    "img": "/apps/dota2/images/dota_react/abilities/dazzle_nothl_projection.png",
    "desc": "Dazzle departs his body, traveling through the Nothl Realm as an invulnerable spirit that can cast spells, attack, and use items, leaving his body behind in the world with a visible tether. While active, Dazzle's basic abilities are empowered: Poison Touch hexes enemies, Shallow Grave heals upon expiration, and Shadow Wave has a shorter cooldown. The effect can be ended early, and Dazzle returns to the body at the end.",
    "behavior": "Point Target",
    "cd": [
      "70",
      "60",
      "50"
    ],
    "mc": [
      "100",
      "150",
      "200"
    ]
  },
  "enchantress_impetus": {
    "dname": "Impetus",
    "img": "/apps/dota2/images/dota_react/abilities/enchantress_impetus.png",
    "desc": "Places an enchantment on each attack while activated, causing it to deal additional damage based on how far away the target is. The farther the target, the greater the damage dealt. Deals double damage to illusions.",
    "behavior": [
      "Unit Target",
      "Autocast",
      "Attack Modifier"
    ],
    "dmg_type": "Pure",
    "bkbpierce": "No",
    "cd": [
      "6",
      "4",
      "2",
      "0"
    ],
    "mc": [
      "40",
      "45",
      "50",
      "55"
    ]
  },
  "ancient_apparition_ice_vortex": {
    "dname": "Ice Vortex",
    "img": "/apps/dota2/images/dota_react/abilities/ancient_apparition_ice_vortex.png",
    "desc": "Creates a vortex of icy energy that applies Death Rime Stacks and increases magic damage done to enemies in its range.",
    "behavior": [
      "AOE",
      "Point Target"
    ],
    "bkbpierce": "No",
    "cd": [
      "10",
      "8",
      "6",
      "4"
    ],
    "mc": [
      "40",
      "55",
      "70",
      "85"
    ]
  },
  "phoenix_icarus_dive_stop": {
    "dname": "Stop Icarus Dive",
    "img": "/apps/dota2/images/dota_react/abilities/phoenix_icarus_dive_stop.png",
    "desc": "Immediately cancels the dive.",
    "behavior": [
      "Instant Cast",
      "No Target",
      "Hidden"
    ]
  },
  "meepo_megameepo_fling": {
    "dname": "MegaMeepo Fling",
    "img": "/apps/dota2/images/dota_react/abilities/meepo_megameepo_fling.png",
    "behavior": [
      "Unit Target",
      "Hidden"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": "0.5",
    "mc": "0",
    "dmg": "225"
  },
  "meepo_petrify": {
    "dname": "Dig",
    "img": "/apps/dota2/images/dota_react/abilities/meepo_petrify.png",
    "desc": "Digs into the ground for a short duration, dispelling Meepo and causing him to become invulnerable and untargetable for 3s. Restores 25% of his max health over that duration.\n\nDISPEL TYPE: Basic Dispel",
    "behavior": [
      "No Target",
      "Hidden"
    ],
    "bkbpierce": "Yes",
    "cd": "40",
    "mc": "125"
  },
  "slark_saltwater_shiv": {
    "dname": "Saltwater Shiv",
    "img": "/apps/dota2/images/dota_react/abilities/slark_saltwater_shiv.png",
    "desc": "Slark slices the target with his salty shiv, stealing a portion of the target's movement speed, Health Regen and Health Restoration. This effect stacks.",
    "behavior": [
      "Unit Target",
      "Autocast",
      "Attack Modifier"
    ],
    "dmg_type": "Physical",
    "bkbpierce": "No",
    "cd": [
      "10",
      "8",
      "6",
      "4"
    ],
    "mc": "20"
  },
  "beastmaster_call_of_the_wild_boar": {
    "dname": "Call of the Wild Boar",
    "img": "/apps/dota2/images/dota_react/abilities/beastmaster_call_of_the_wild_boar.png",
    "desc": "Beastmaster calls forth a Boar to aid in the battlefield. The Boar has a passive poison attack that slows attack and movement speeds.",
    "behavior": "No Target",
    "dmg_type": "Physical",
    "cd": "30",
    "mc": "60"
  },
  "necrolyte_death_seeker": {
    "dname": "Death Seeker",
    "img": "/apps/dota2/images/dota_react/abilities/necrolyte_death_seeker.png",
    "desc": "Necrophos turns into a large Death Pulse towards the target unit's position. Once it arrives to the location, the Death Pulse spreads towards nearby enemies and allies.",
    "behavior": [
      "Unit Target",
      "Hidden"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": "19",
    "mc": "125"
  },
  "arc_warden_flux": {
    "dname": "Flux",
    "img": "/apps/dota2/images/dota_react/abilities/arc_warden_flux.png",
    "desc": "Infuses a lone enemy unit with swirling, volatile energy, dealing damage over time and slowing the target. The damage is not applied if another enemy unit is near the target.",
    "behavior": "Unit Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": "16",
    "mc": "75"
  },
  "doom_bringer_lvl_pain": {
    "dname": "Lvl ? Pain",
    "img": "/apps/dota2/images/dota_react/abilities/doom_bringer_lvl_pain.png",
    "desc": "Doom's attacks deal 25% bonus damage to heroes whose level is lower than Doom's level.",
    "behavior": "Passive"
  },
  "gyrocopter_flak_cannon": {
    "dname": "Flak Cannon",
    "img": "/apps/dota2/images/dota_react/abilities/gyrocopter_flak_cannon.png",
    "desc": "Gyrocopter's attacks hit all enemy units in an area around it for a limited number of attacks. Only the main target of attacks will receive attack bonuses such as Critical Strike. Lasts 12 seconds or until the attacks are used.",
    "behavior": [
      "No Target",
      "Instant Cast"
    ],
    "dmg_type": "Physical",
    "bkbpierce": "Yes",
    "cd": [
      "26",
      "24",
      "22",
      "20"
    ],
    "mc": [
      "50",
      "60",
      "70",
      "80"
    ]
  },
  "witch_doctor_voodoo_restoration": {
    "dname": "Voodoo Restoration",
    "img": "/apps/dota2/images/dota_react/abilities/witch_doctor_voodoo_restoration.png",
    "desc": "Witch Doctor focuses his magic to heal nearby allied units, costing Witch Doctor mana every second Voodoo Restoration is active.",
    "behavior": "No Target",
    "dmg_type": "Magical",
    "bkbpierce": "Yes",
    "cd": "0",
    "mc": "25"
  },
  "windrunner_gale_force": {
    "dname": "Gale Force",
    "img": "/apps/dota2/images/dota_react/abilities/windrunner_gale_force.png",
    "desc": "Vector Targeted. Summons a strong wind that pushes all enemies in the target area towards the target direction.",
    "behavior": [
      "Point Target",
      "Hidden"
    ],
    "bkbpierce": "No",
    "cd": "30",
    "mc": "125"
  },
  "rattletrap_jetpack_toggle": {
    "dname": "Jetpack Toggle",
    "img": "/apps/dota2/images/dota_react/abilities/rattletrap_jetpack_toggle.png",
    "desc": "Toggles Jetpack on and off.",
    "behavior": [
      "Hidden",
      "No Target"
    ],
    "cd": "1"
  },
  "spectre_reality": {
    "dname": "Reality",
    "img": "/apps/dota2/images/dota_react/abilities/spectre_reality.png",
    "desc": "Spectre assumes the target Shadow Step or Haunt illusion, destroying it.",
    "behavior": "Point Target",
    "cd": "1.5",
    "mc": "25"
  },
  "monkey_king_primal_spring": {
    "dname": "Primal Spring",
    "img": "/apps/dota2/images/dota_react/abilities/monkey_king_primal_spring.png",
    "desc": "CHANNELED - Monkey King springs out from his tree perch, damaging and slowing enemies in the area where he lands. Damage and slow amounts are in proportion to channel duration.",
    "behavior": [
      "Point Target",
      "AOE",
      "Channeled"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "18",
      "16",
      "14",
      "12"
    ],
    "mc": "100",
    "dmg": [
      "110",
      "200",
      "290",
      "380"
    ]
  },
  "ringmaster_tame_the_beasts": {
    "dname": "Tame the Beasts",
    "img": "/apps/dota2/images/dota_react/abilities/ringmaster_tame_the_beasts.png",
    "desc": "CHANNELED - Ringmaster twirls his whip for up to 1 second then cracks it. Whipped enemies are damaged and flee in fear from Ringmaster. Channel time exponentially increases damage and extends the fear duration, but reduces the radius.",
    "behavior": [
      "Point Target",
      "AOE",
      "Channeled"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "16",
      "14",
      "12",
      "10"
    ],
    "mc": [
      "90",
      "105",
      "120",
      "135"
    ]
  },
  "windrunner_focusfire_cancel": {
    "dname": "Focus Fire Cancel",
    "img": "/apps/dota2/images/dota_react/abilities/windrunner_focusfire_cancel.png",
    "desc": "End your Focus Fire early.",
    "behavior": [
      "Hidden",
      "No Target"
    ]
  },
  "drow_ranger_frost_arrows": {
    "dname": "Frost Arrows",
    "img": "/apps/dota2/images/dota_react/abilities/drow_ranger_frost_arrows.png",
    "desc": "Adds a freezing effect to Drow's attacks, slowing enemy movement and dealing bonus damage. Slow lasts 1.5 seconds.",
    "behavior": [
      "Unit Target",
      "Autocast",
      "Attack Modifier"
    ],
    "dmg_type": "Physical",
    "bkbpierce": "No",
    "cd": "0",
    "mc": [
      "9",
      "10",
      "11",
      "12"
    ],
    "dmg": "0"
  },
  "shredder_reactive_armor": {
    "dname": "Reactive Armor",
    "img": "/apps/dota2/images/dota_react/abilities/shredder_reactive_armor.png",
    "desc": "Each time Timbersaw is attacked, he gains increased health regen and armor. Hero attacks are counted as 4x the amount.",
    "behavior": "Passive",
    "dmg_type": "Magical",
    "cd": "undefined",
    "mc": "undefined"
  },
  "antimage_blink": {
    "dname": "Blink",
    "img": "/apps/dota2/images/dota_react/abilities/antimage_blink.png",
    "desc": "Short distance teleportation that allows Anti-Mage to move in and out of combat.",
    "behavior": "Point Target",
    "cd": [
      "12",
      "10",
      "8",
      "6"
    ],
    "mc": "50"
  },
  "meepo_ransack": {
    "dname": "Ransack",
    "img": "/apps/dota2/images/dota_react/abilities/meepo_ransack.png",
    "desc": "Steals health from the enemy with each strike and heals all other Meepos for that amount.",
    "behavior": "Passive",
    "dmg_type": "Pure",
    "bkbpierce": "No"
  },
  "night_stalker_crippling_fear": {
    "dname": "Crippling Fear",
    "img": "/apps/dota2/images/dota_react/abilities/night_stalker_crippling_fear.png",
    "desc": "Night Stalker horrifies all nearby enemies, causing them to become silenced and take damage over time while near him. The effect lasts longer at night.",
    "behavior": [
      "No Target",
      "Instant Cast"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "30",
      "25",
      "20",
      "15"
    ],
    "mc": "50"
  },
  "phantom_lancer_juxtapose": {
    "dname": "Juxtapose",
    "img": "/apps/dota2/images/dota_react/abilities/phantom_lancer_juxtapose.png",
    "desc": "Phantom Lancer has a chance to fracture his presence on an attack, creating an illusion of himself. Illusions also have a chance to fracture further. Illusions created from Phantom Lancer last for 8 seconds, while illusions created from other illusions last 4 seconds.",
    "behavior": "Passive",
    "cd": "15",
    "mc": "75"
  },
  "axe_battle_hunger": {
    "dname": "Battle Hunger",
    "img": "/apps/dota2/images/dota_react/abilities/axe_battle_hunger.png",
    "desc": "Enrages an enemy unit, causing it to take damage over time until it kills another unit or the duration ends. The enemy is slowed as long as they are facing away from Axe.",
    "behavior": "Unit Target",
    "dmg_type": "Pure",
    "bkbpierce": "No",
    "cd": [
      "20",
      "15",
      "10",
      "5"
    ],
    "mc": [
      "50",
      "60",
      "70",
      "80"
    ]
  },
  "dawnbreaker_solar_guardian": {
    "dname": "Solar Guardian",
    "img": "/apps/dota2/images/dota_react/abilities/dawnbreaker_solar_guardian.png",
    "desc": "CHANNELED - Dawnbreaker creates a pulsing effect at a location within 350 units of an allied hero anywhere on the map, damaging enemies and healing allies with each pulse. After a short duration, she flies to the target location, dealing additional damage and stunning enemies upon landing. Once channeled, Dawnbreaker cannot stop the ability.",
    "behavior": [
      "Point Target",
      "Channeled"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "Yes",
    "cd": [
      "120",
      "105",
      "90"
    ],
    "mc": [
      "150",
      "200",
      "250"
    ]
  },
  "tinker_march_of_the_machines": {
    "dname": "March of the Machines",
    "img": "/apps/dota2/images/dota_react/abilities/tinker_march_of_the_machines.png",
    "desc": "Enlists an army of robotic minions to destroy enemy units in an area around Tinker.",
    "behavior": [
      "AOE",
      "Point Target"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "35",
      "33",
      "31",
      "29"
    ],
    "mc": [
      "100",
      "120",
      "140",
      "160"
    ],
    "dmg": "0"
  },
  "treant_natures_grasp": {
    "dname": "Nature's Grasp",
    "img": "/apps/dota2/images/dota_react/abilities/treant_natures_grasp.png",
    "desc": "Creates vines towards the target location. Vines slow down and deal damage to enemies that walk through. Does 35% less damage to creeps.",
    "behavior": "Point Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "20",
      "19",
      "18",
      "17"
    ],
    "mc": "90"
  },
  "ogre_magi_dumb_luck": {
    "dname": "Dumb Luck",
    "img": "/apps/dota2/images/dota_react/abilities/ogre_magi_dumb_luck.png",
    "behavior": "Passive"
  },
  "sniper_headshot": {
    "dname": "Headshot",
    "img": "/apps/dota2/images/dota_react/abilities/sniper_headshot.png",
    "desc": "Sniper increases his accuracy, giving him a chance to deal extra damage and knock back his enemies. Knockback distance increases based on how close the enemy is to Sniper. Headshots briefly slow enemy movement and attack speed by -100%.",
    "behavior": "Passive",
    "dmg_type": "Physical",
    "bkbpierce": "No",
    "dmg": [
      "20",
      "50",
      "80",
      "110"
    ]
  },
  "phoenix_fire_spirits": {
    "dname": "Fire Spirits",
    "img": "/apps/dota2/images/dota_react/abilities/phoenix_fire_spirits.png",
    "desc": "Summons 4 fire spirits that circle around Phoenix. Each spirit can be launched independently at a targeted area of effect. Affected enemy units take damage over time and have their attack speed greatly reduced.",
    "behavior": [
      "No Target",
      "Instant Cast"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "50",
      "40",
      "30",
      "20"
    ],
    "mc": "100"
  },
  "enchantress_little_friends": {
    "dname": "Little Friends",
    "img": "/apps/dota2/images/dota_react/abilities/enchantress_little_friends.png",
    "desc": "Enchantress roots an enemy unit. All creeps, ally, enemy and neutral within a radius will gain bonus movement and attack speed and attack the chosen target for 6 seconds.",
    "behavior": [
      "Unit Target",
      "AOE"
    ],
    "bkbpierce": "No",
    "cd": "20",
    "mc": "75"
  },
  "sniper_keen_scope": {
    "dname": "Keen Scope",
    "img": "/apps/dota2/images/dota_react/abilities/sniper_keen_scope.png",
    "desc": "Increases Sniper's attack range.",
    "behavior": "Passive"
  },
  "lich_frost_nova": {
    "dname": "Frost Blast",
    "img": "/apps/dota2/images/dota_react/abilities/lich_frost_nova.png",
    "desc": "Blasts the target enemy unit with damaging frost, dealing area damage and slowing movement and attack rates for 4 seconds. The primary target receives both base and area damage.",
    "behavior": [
      "Unit Target",
      "AOE"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": "7",
    "mc": [
      "110",
      "120",
      "130",
      "140"
    ]
  },
  "riki_innate_backstab": {
    "dname": "Backstab",
    "img": "/apps/dota2/images/dota_react/abilities/riki_innate_backstab.png",
    "desc": "Every time Riki strikes his enemy from behind, he deals additional bonus damage equal to a multiple of his Agility.",
    "behavior": [
      "Passive",
      "Hidden"
    ],
    "dmg_type": "Physical"
  },
  "tinker_eureka": {
    "dname": "Eureka!",
    "img": "/apps/dota2/images/dota_react/abilities/tinker_eureka.png",
    "desc": "Tinker gains 1% item cooldown reduction per 3 Intelligence, up to a maximum of 60%.",
    "behavior": "Passive"
  },
  "tiny_avalanche": {
    "dname": "Avalanche",
    "img": "/apps/dota2/images/dota_react/abilities/tiny_avalanche.png",
    "desc": "Bombards an area with rocks, continously doing small intervals of damage and stun to enemy units.",
    "behavior": [
      "AOE",
      "Point Target"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "23",
      "20",
      "17",
      "14"
    ],
    "mc": [
      "95",
      "110",
      "125",
      "140"
    ]
  },
  "dazzle_shadow_wave": {
    "dname": "Shadow Wave",
    "img": "/apps/dota2/images/dota_react/abilities/dazzle_shadow_wave.png",
    "desc": "Sends out a bolt of power that arcs between allies, healing them while damaging any enemy units standing nearby. Dazzle is always healed by Shadow Wave.",
    "behavior": "Unit Target",
    "dmg_type": "Physical",
    "bkbpierce": "Yes",
    "cd": [
      "10",
      "9",
      "8",
      "7"
    ],
    "mc": "90",
    "dmg": [
      "85",
      "105",
      "125",
      "145"
    ]
  },
  "nyx_assassin_nyxth_sense": {
    "dname": "Nyxth Sense",
    "img": "/apps/dota2/images/dota_react/abilities/nyx_assassin_nyxth_sense.png",
    "desc": "Nyx Assassin can detect heroes within 400 units of himself.",
    "behavior": "Passive"
  },
  "arc_warden_runic_infusion": {
    "dname": "Runic Infusion",
    "img": "/apps/dota2/images/dota_react/abilities/arc_warden_runic_infusion.png",
    "desc": "Upon activating any rune, gain the Regeneration Rune buff for 4s.",
    "behavior": "Passive"
  },
  "grimstroke_spirit_walk": {
    "dname": "Ink Swell",
    "img": "/apps/dota2/images/dota_react/abilities/grimstroke_spirit_walk.png",
    "desc": "Grimstroke shrouds an allied unit in ink, increasing its movement speed. Enemies in range of the allied unit are damaged with inky tendrils over time. After 1 seconds it applies damage and stun in an area around the unit in proportion to how long ink tendril was near any hero.",
    "behavior": "Unit Target",
    "dmg_type": "Magical",
    "cd": [
      "27",
      "24",
      "21",
      "18"
    ],
    "mc": [
      "120",
      "130",
      "140",
      "150"
    ]
  },
  "treant_leech_seed": {
    "dname": "Leech Seed",
    "img": "/apps/dota2/images/dota_react/abilities/treant_leech_seed.png",
    "desc": "Treant's attack plants a life-sapping seed in an enemy unit, dealing additional magic damage. The unit is then bound for a short duration and emits 2 healing pulses to up to 5 nearby allies of Treant Protector based on a flat amount and the damage dealt by the attack.",
    "behavior": [
      "Unit Target",
      "Autocast",
      "Attack Modifier"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "15",
      "12",
      "9",
      "6"
    ]
  },
  "hoodwink_decoy": {
    "dname": "Decoy",
    "img": "/apps/dota2/images/dota_react/abilities/hoodwink_decoy.png",
    "desc": "Hoodwink turns invisible, increasing her movement speed, and creates a decoy illusion that starts aiming a decreased damage Sharpshooter at the nearest enemy hero. If the illusion is attacked or hit by a targeted ability, it is destroyed and it throws a lesser bushwhack towards the enemy.",
    "behavior": [
      "No Target",
      "Instant Cast",
      "Hidden"
    ],
    "cd": "30",
    "mc": "60"
  },
  "primal_beast_onslaught_release": {
    "dname": "Begin Onslaught",
    "img": "/apps/dota2/images/dota_react/abilities/primal_beast_onslaught_release.png",
    "desc": "Begins the rush to the specified location.",
    "behavior": [
      "Instant Cast",
      "No Target",
      "Hidden"
    ],
    "cd": "0.3"
  },
  "kunkka_ghostship": {
    "dname": "Ghostship",
    "img": "/apps/dota2/images/dota_react/abilities/kunkka_ghostship.png",
    "desc": "Summons a ghostly ship that sails through the battle before smashing apart, damaging and stunning all enemies caught near the wreckage. Allied heroes touched by the Ghostship are given a strong swig of The Admiral's Rum, receiving bonus movement speed and a delayed reaction to incoming damage.",
    "behavior": "Point Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "90",
      "80",
      "70"
    ],
    "mc": [
      "125",
      "175",
      "225"
    ],
    "dmg": [
      "350",
      "475",
      "600"
    ]
  },
  "warlock_fatal_bonds": {
    "dname": "Fatal Bonds",
    "img": "/apps/dota2/images/dota_react/abilities/warlock_fatal_bonds.png",
    "desc": "Binds several visible enemy units together, causing a percentage of the damage dealt to one of them to be felt by the others.",
    "behavior": "Unit Target",
    "bkbpierce": "No",
    "cd": [
      "42",
      "34",
      "26",
      "18"
    ],
    "mc": [
      "120",
      "130",
      "140",
      "150"
    ],
    "dmg": "0"
  },
  "techies_sticky_bomb": {
    "dname": "Sticky Bomb",
    "img": "/apps/dota2/images/dota_react/abilities/techies_sticky_bomb.png",
    "desc": "Lobs a Sticky Bomb towards the target area. If it lands next to an enemy hero, the bomb will stick to it, slowing its movement speed. After a few seconds the bomb will explode, dealing damage in an area around the detonation and applying a secondary slow for 3 seconds.",
    "behavior": [
      "Point Target",
      "AOE"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "16",
      "13",
      "10",
      "7"
    ],
    "mc": [
      "100",
      "115",
      "130",
      "145"
    ],
    "dmg": [
      "95",
      "170",
      "245",
      "320"
    ]
  },
  "tidehunter_gush": {
    "dname": "Gush",
    "img": "/apps/dota2/images/dota_react/abilities/tidehunter_gush.png",
    "desc": "Summons a gush of water to damage an enemy unit, reducing their movement speed and armor.",
    "behavior": "Unit Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": "12",
    "mc": "100",
    "dmg": [
      "100",
      "160",
      "220",
      "280"
    ]
  },
  "largo_croak_of_genius": {
    "dname": "Croak of Genius",
    "img": "/apps/dota2/images/dota_react/abilities/largo_croak_of_genius.png",
    "desc": "Largo strums a tune to a friendly hero. The hero's items and abilities have reduced mana cost and a percentage of their damage reverberates over the following 5 seconds. When an affected hero spends mana, the remaining buff duration is reduced by 0.5s.",
    "behavior": "Unit Target",
    "dmg_type": "Magical",
    "cd": "25",
    "mc": [
      "25",
      "35",
      "45",
      "55"
    ]
  },
  "dawnbreaker_celestial_hammer": {
    "dname": "Celestial Hammer",
    "img": "/apps/dota2/images/dota_react/abilities/dawnbreaker_celestial_hammer.png",
    "desc": "Dawnbreaker hurls her weapon at a target, damaging enemies struck along the way. The hammer pauses for 2 seconds at the destination before flying back to her, leaving a trail of fire that slows enemies. Dawnbreaker can recall the hammer at any time, pulling her towards it so they meet in the middle.",
    "behavior": "Point Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "18",
      "16",
      "14",
      "12"
    ],
    "mc": [
      "100",
      "110",
      "120",
      "130"
    ]
  },
  "phantom_assassin_coup_de_grace": {
    "dname": "Coup de Grace",
    "img": "/apps/dota2/images/dota_react/abilities/phantom_assassin_coup_de_grace.png",
    "desc": "Phantom Assassin refines her combat abilities, acquiring a chance of gaining Deadly Focus with each attack. When attacking with Deadly Focus, Phantom Assassin will consume the buff and guarantee a critical hit. Stifling Dagger has a bonus chance to cause Deadly Focus.",
    "behavior": "Passive",
    "bkbpierce": "Yes"
  },
  "spectre_dispersion": {
    "dname": "Dispersion",
    "img": "/apps/dota2/images/dota_react/abilities/spectre_dispersion.png",
    "desc": "Damage done to Spectre is reflected on her enemies, leaving her unharmed. The effect lessens with distance.",
    "behavior": "Passive",
    "bkbpierce": "Yes"
  },
  "naga_siren_reel_in": {
    "dname": "Reel In",
    "img": "/apps/dota2/images/dota_react/abilities/naga_siren_reel_in.png",
    "desc": "CHANNELED - Naga Siren channels for up to 5 seconds, pulling all units affected by Naga's Ensnare in a 1600 range towards her at a speed of 200. Channeling ends when the Ensnared unit is 100 distance away.",
    "behavior": [
      "No Target",
      "Channeled"
    ],
    "bkbpierce": "Yes",
    "cd": "8",
    "mc": "0"
  },
  "ancient_apparition_cold_feet": {
    "dname": "Cold Feet",
    "img": "/apps/dota2/images/dota_react/abilities/ancient_apparition_cold_feet.png",
    "desc": "Places Death Rime Stacks on an enemy that can be dispelled by moving away from the initial cast point. If the enemy unit doesn't move outside of the given range, it will be stunned and frozen in place after 4 seconds.",
    "behavior": "Unit Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "15",
      "13",
      "11",
      "9"
    ],
    "mc": [
      "110",
      "115",
      "120",
      "125"
    ]
  },
  "terrorblade_dark_unity": {
    "dname": "Dark Unity",
    "img": "/apps/dota2/images/dota_react/abilities/terrorblade_dark_unity.png",
    "desc": "Nearby Illusions created by Terrorblade have bonus attack damage.",
    "behavior": "Passive"
  },
  "mars_bulwark": {
    "dname": "Bulwark",
    "img": "/apps/dota2/images/dota_react/abilities/mars_bulwark.png",
    "desc": "Mars wields his massive shield to block a portion of each physical attack when hit from the front or sides.\n\n Can be toggled, granting phased movement, removing Mars's ability to attack, and locking the direction he is facing. When active, reduces movement speed and re-directs 70% of the attack projectiles aimed at Mars's allies towards Mars instead.",
    "behavior": "No Target"
  },
  "ember_spirit_flame_guard": {
    "dname": "Flame Guard",
    "img": "/apps/dota2/images/dota_react/abilities/ember_spirit_flame_guard.png",
    "desc": "Ember Spirit surrounds himself with a ring of fire that consumes incoming magic damage, absorbing a percentage of the damage taken. Flame Guard deals damage per second in an area around Ember Spirit while Flame Guard is active. If the shield is broken, the damage is also lost.",
    "behavior": "No Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": "32",
    "mc": [
      "65",
      "80",
      "95",
      "110"
    ]
  },
  "sandking_caustic_finale": {
    "dname": "Caustic Finale",
    "img": "/apps/dota2/images/dota_react/abilities/sandking_caustic_finale.png",
    "desc": "Sand King's attacks inject a venom that causes enemy units to violently explode when they die.",
    "behavior": "Passive",
    "dmg_type": "Magical",
    "bkbpierce": "No"
  },
  "terrorblade_terror_wave": {
    "dname": "Terror Wave",
    "img": "/apps/dota2/images/dota_react/abilities/terrorblade_terror_wave.png",
    "desc": "Causes a wave to travel outwards in all directions forcing enemy heroes to become Feared upon impact and dealing damage, and grants Terrorblade Metamorphosis for a short time.",
    "behavior": [
      "No Target",
      "Instant Cast"
    ],
    "dmg_type": "Magical",
    "cd": "90",
    "mc": "75",
    "dmg": "200"
  },
  "riki_smoke_screen": {
    "dname": "Smoke Screen",
    "img": "/apps/dota2/images/dota_react/abilities/riki_smoke_screen.png",
    "desc": "Throws down a smoke bomb, silencing enemies and causing them to miss attacks.",
    "behavior": [
      "AOE",
      "Point Target"
    ],
    "bkbpierce": "No",
    "cd": [
      "17",
      "15",
      "13",
      "11"
    ],
    "mc": [
      "65",
      "70",
      "75",
      "80"
    ]
  },
  "visage_summon_familiars": {
    "dname": "Summon Familiars",
    "img": "/apps/dota2/images/dota_react/abilities/visage_summon_familiars.png",
    "desc": "Conjures 2 blind Familiars to fight for Visage. Familiars possess the Stone Form ability, that allows them to turn into stone, stunning enemies upon landing. While in Stone Form, Familiars are invulnerable, and rapidly regenerate their health. Familiars grant high bounty when killed.",
    "behavior": [
      "No Target",
      "Instant Cast"
    ],
    "dmg_type": "Physical",
    "cd": [
      "130",
      "120",
      "110"
    ],
    "mc": "150"
  },
  "crystal_maiden_blueheart_floe": {
    "dname": "Blueheart Floe",
    "img": "/apps/dota2/images/dota_react/abilities/crystal_maiden_blueheart_floe.png",
    "desc": "Crystal Maiden has 25% Mana Regeneration Amplification.",
    "behavior": [
      "Passive",
      "Hidden"
    ]
  },
  "razor_static_link": {
    "dname": "Static Link",
    "img": "/apps/dota2/images/dota_react/abilities/razor_static_link.png",
    "desc": "Creates a charged link between Razor and an enemy Hero, stealing damage from the target and giving it to Razor. Allows Razor to attack while moving with the link active.",
    "behavior": "Unit Target",
    "bkbpierce": "Yes",
    "cd": [
      "44",
      "36",
      "28",
      "20"
    ],
    "mc": "65"
  },
  "witch_doctor_voodoo_switcheroo": {
    "dname": "Voodoo Switcheroo",
    "img": "/apps/dota2/images/dota_react/abilities/witch_doctor_voodoo_switcheroo.png",
    "desc": "Turns Witch Doctor into a Death Ward briefly with reduced attack speed. He is hidden during this time.",
    "behavior": [
      "No Target",
      "Hidden"
    ],
    "cd": "50",
    "mc": "200"
  },
  "phantom_assassin_phantom_strike": {
    "dname": "Phantom Strike",
    "img": "/apps/dota2/images/dota_react/abilities/phantom_assassin_phantom_strike.png",
    "desc": "Teleports to a unit, friendly or enemy, and grants bonus attack speed while attacking if it's an enemy unit.",
    "behavior": "Unit Target",
    "bkbpierce": "Yes",
    "cd": "0.1",
    "mc": [
      "35",
      "40",
      "45",
      "50"
    ]
  },
  "dragon_knight_fireball": {
    "dname": "Fireball",
    "img": "/apps/dota2/images/dota_react/abilities/dragon_knight_fireball.png",
    "desc": "Ignites an area, dealing damage over time that lingers on enemies in it. Has reduced cast range when melee.",
    "behavior": [
      "Point Target",
      "AOE",
      "Hidden"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": "20",
    "mc": "80"
  },
  "broodmother_insatiable_hunger": {
    "dname": "Insatiable Hunger",
    "img": "/apps/dota2/images/dota_react/abilities/broodmother_insatiable_hunger.png",
    "desc": "A violent lust for vital fluids increases Broodmother's attack damage and gives her a vampiric attack.",
    "behavior": "No Target",
    "dmg_type": "Physical",
    "cd": [
      "45",
      "40",
      "35",
      "30"
    ],
    "mc": "80"
  },
  "viper_poison_attack": {
    "dname": "Poison Attack",
    "img": "/apps/dota2/images/dota_react/abilities/viper_poison_attack.png",
    "desc": "Intensifies Viper's venom, adding an effect to his normal attack that applies a stacking movement speed slow and magic resistance deduction while dealing damage over time. Stacks up to 6 times.",
    "behavior": [
      "Unit Target",
      "Autocast",
      "Attack Modifier"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": "0",
    "mc": "20",
    "dmg": "0"
  },
  "dragon_knight_dragon_tail": {
    "dname": "Dragon Tail",
    "img": "/apps/dota2/images/dota_react/abilities/dragon_knight_dragon_tail.png",
    "desc": "Dragon Knight smites an enemy unit in melee range with his shield, stunning it and dealing damage. When in Elder Dragon Form, the cast range increases to 450.",
    "behavior": "Unit Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "16",
      "14",
      "12",
      "10"
    ],
    "mc": [
      "70",
      "80",
      "90",
      "100"
    ],
    "dmg": [
      "60",
      "90",
      "120",
      "150"
    ]
  },
  "meepo_divided_we_stand": {
    "dname": "Divided We Stand",
    "img": "/apps/dota2/images/dota_react/abilities/meepo_divided_we_stand.png",
    "desc": "Meepo summons an imperfect, semi-autonomous duplicate of himself, which can gain gold and experience as he does and shares his experience, attributes and abilities. However, the clones cannot wield any items but the boots that Meepo himself wears. If any of the clones die, they all die. Divided We Stand grants all Meepos bonus Magic Resistance.",
    "behavior": "Passive",
    "dmg": "0"
  },
  "earth_spirit_rolling_boulder": {
    "dname": "Rolling Boulder",
    "img": "/apps/dota2/images/dota_react/abilities/earth_spirit_rolling_boulder.png",
    "desc": "Earth Spirit gathers himself into a boulder and, after a 0.6s delay, rolls toward the target location, dealing 60 + 100% STR damage and stunning enemy units. He will stop if he collides with an enemy hero or is stunned. If he rolls over a Stone Remnant, he will travel further and faster, and stun enemies for longer.",
    "behavior": "Point Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "16",
      "12",
      "8",
      "4"
    ],
    "mc": "50",
    "dmg": [
      "60",
      "70",
      "80",
      "90"
    ]
  },
  "antimage_counterspell": {
    "dname": "Counterspell",
    "img": "/apps/dota2/images/dota_react/abilities/antimage_counterspell.png",
    "desc": "Passively grants magic resistance. Counterspell may be activated to create an anti-magic shell around Anti-Mage that blocks and reflects any targeted spells.",
    "behavior": [
      "No Target",
      "Instant Cast"
    ],
    "cd": [
      "15",
      "11",
      "7",
      "3"
    ],
    "mc": "50"
  },
  "viper_predator": {
    "dname": "Predator",
    "img": "/apps/dota2/images/dota_react/abilities/viper_predator.png",
    "behavior": "Passive",
    "dmg_type": "Physical",
    "bkbpierce": "No"
  },
  "magnataur_shockwave": {
    "dname": "Shockwave",
    "img": "/apps/dota2/images/dota_react/abilities/magnataur_shockwave.png",
    "desc": "Magnus sends out a wave of force, damaging enemy units in a line, pulling them towards him, and slowing them for a brief period.",
    "behavior": [
      "Unit Target",
      "Point Target"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "13",
      "12",
      "11",
      "10"
    ],
    "mc": [
      "85",
      "90",
      "95",
      "100"
    ],
    "dmg": [
      "75",
      "150",
      "225",
      "300",
      "300"
    ]
  },
  "sniper_shrapnel": {
    "dname": "Shrapnel",
    "img": "/apps/dota2/images/dota_react/abilities/sniper_shrapnel.png",
    "desc": "Consumes a charge to launch a ball of shrapnel that showers the target area in explosive pellets. Enemies are subject to damage and slowed movement. Reveals the targeted area. Shrapnel charges restore every 35 seconds.",
    "behavior": [
      "AOE",
      "Point Target"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": "0",
    "mc": "75",
    "dmg": [
      "30",
      "45",
      "60",
      "75"
    ]
  },
  "rattletrap_power_cogs": {
    "dname": "Power Cogs",
    "img": "/apps/dota2/images/dota_react/abilities/rattletrap_power_cogs.png",
    "desc": "Forms a ring of energized cogs around Clockwerk, trapping any units that are near. Enemies outside the trap that touch a cog are knocked back, losing health and mana. Once a cog has delivered a shock, it will power down. Damage is increased by 50% of the mana burned.\n\n Cogs can be destroyed by enemy attacks, but Clockwerk can push them up to 1000 distance away with one hit.",
    "behavior": "No Target",
    "dmg_type": "Magical",
    "bkbpierce": "Yes",
    "cd": [
      "21",
      "19",
      "17",
      "15"
    ],
    "mc": "70",
    "dmg": [
      "50",
      "125",
      "200",
      "275"
    ]
  },
  "puck_illusory_orb": {
    "dname": "Illusory Orb",
    "img": "/apps/dota2/images/dota_react/abilities/puck_illusory_orb.png",
    "desc": "Puck launches a magic orb that floats in a straight path, damaging enemy units along the way. At any point, Puck may teleport to the orb's location using Ethereal Jaunt.",
    "behavior": "Point Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "11",
      "10",
      "9",
      "8"
    ],
    "mc": [
      "90",
      "100",
      "110",
      "120"
    ],
    "dmg": [
      "75",
      "150",
      "225",
      "300"
    ]
  },
  "slark_dark_pact": {
    "dname": "Dark Pact",
    "img": "/apps/dota2/images/dota_react/abilities/slark_dark_pact.png",
    "desc": "After a short delay, Slark sacrifices some of his life blood, purging most negative debuffs and dealing damage to enemy units around him and to himself. Slark only takes 30% of the damage.\n\nDISPEL TYPE: Strong Dispel",
    "behavior": [
      "No Target",
      "Instant Cast"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "9",
      "8",
      "7",
      "6"
    ],
    "mc": "65",
    "dmg": [
      "75",
      "150",
      "225",
      "300"
    ]
  },
  "wisp_spirits_out": {
    "dname": "Spirits Out",
    "img": "/apps/dota2/images/dota_react/abilities/wisp_spirits_out.png",
    "desc": "Sends the spirits farther away from you. Can be toggled on and off.",
    "behavior": [
      "Instant Cast",
      "Hidden"
    ]
  },
  "pangolier_fortune_favors_the_bold": {
    "dname": "Fortune Favors the Bold",
    "img": "/apps/dota2/images/dota_react/abilities/pangolier_fortune_favors_the_bold.png",
    "desc": "Random item and ability effects of enemies near Pangolier have a reduced chance to affect him.",
    "behavior": "Passive"
  },
  "clinkz_searing_arrows": {
    "dname": "Searing Arrows",
    "img": "/apps/dota2/images/dota_react/abilities/clinkz_searing_arrows.png",
    "desc": "Imbues Clinkz's arrows with fire for extra damage.\n\nSkeleton Archers will fire Searing Arrows at targets Clinkz attacks for 50% damage.",
    "behavior": [
      "Unit Target",
      "Autocast",
      "Attack Modifier"
    ],
    "dmg_type": "Physical",
    "bkbpierce": "Yes",
    "cd": "0",
    "mc": "10"
  },
  "primal_beast_rock_throw": {
    "dname": "Rock Throw",
    "img": "/apps/dota2/images/dota_react/abilities/primal_beast_rock_throw.png",
    "desc": "Primal Beast throws a rock at the target location that stuns and damages enemies. The rock cannot be thrown within a minimum range of Primal Beast. After landing, the rock splits into 3 additional fragments that land behind the initial target location.\n\n Rock Throw increases stacks of Uproar for each hero hit.",
    "behavior": [
      "Point Target",
      "AOE",
      "Hidden"
    ],
    "dmg_type": "Physical",
    "bkbpierce": "No",
    "cd": "20",
    "mc": "85",
    "dmg": "325"
  },
  "ogre_magi_fireblast": {
    "dname": "Fireblast",
    "img": "/apps/dota2/images/dota_react/abilities/ogre_magi_fireblast.png",
    "desc": "Blasts an enemy unit with a wave of fire, dealing damage and stunning the target.",
    "behavior": "Unit Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "11",
      "10",
      "9",
      "8"
    ],
    "mc": [
      "70",
      "85",
      "100",
      "115"
    ]
  },
  "arc_warden_magnetic_field": {
    "dname": "Magnetic Field",
    "img": "/apps/dota2/images/dota_react/abilities/arc_warden_magnetic_field.png",
    "desc": "Arc Warden generates a circular distortion field of magnetic energy. The magnetic field grants bonus attack speed and protects allied units within it by evading attacks coming from outside the field.",
    "behavior": [
      "Point Target",
      "AOE"
    ],
    "bkbpierce": "Yes",
    "cd": [
      "20",
      "19",
      "18",
      "17"
    ],
    "mc": [
      "60",
      "70",
      "80",
      "90"
    ]
  },
  "oracle_false_promise": {
    "dname": "False Promise",
    "img": "/apps/dota2/images/dota_react/abilities/oracle_false_promise.png",
    "desc": "Temporarily alters an ally's destiny, delaying any healing or damage taken until False Promise ends. Any healing that is delayed by False Promise is amplified. Removes most negative status effects and disables on initial cast.\n\nDISPEL TYPE: Strong Dispel",
    "behavior": "Unit Target",
    "bkbpierce": "Yes",
    "cd": [
      "110",
      "85",
      "60"
    ],
    "mc": [
      "100",
      "150",
      "200"
    ]
  },
  "life_stealer_feast": {
    "dname": "Feast",
    "img": "/apps/dota2/images/dota_react/abilities/life_stealer_feast.png",
    "desc": "Lifestealer's attacks deal damage and provide heal for a percentage of his target's max health. Allows Lifestealer to attack allied creeps at 75% health. Lifestealer gains permanent max HP whenever he kills a creep or hero.",
    "behavior": "Passive",
    "dmg_type": "Physical",
    "bkbpierce": "Yes"
  },
  "bristleback_warpath": {
    "dname": "Warpath",
    "img": "/apps/dota2/images/dota_react/abilities/bristleback_warpath.png",
    "desc": "Bristleback works himself up into a fury every time he casts a spell, increasing his movement speed and damage.",
    "behavior": "Passive",
    "cd": "45",
    "mc": "0"
  },
  "crystal_maiden_crystal_clone": {
    "dname": "Crystal Clone",
    "img": "/apps/dota2/images/dota_react/abilities/crystal_maiden_crystal_clone.png",
    "desc": "Slides in a direction, creating a crystal clone of herself in her place and disjointing incoming projectiles. If the clone takes enough damage or times out, it shatters, Frostbiting enemies in a 450 AoE around its place. The Clone can also be destroyed by Crystal Maiden's own spells.",
    "behavior": [
      "Point Target",
      "Hidden",
      "Instant Cast"
    ],
    "bkbpierce": "No",
    "cd": "10",
    "mc": "150"
  },
  "invoker_cold_snap": {
    "dname": "Cold Snap",
    "img": "/apps/dota2/images/dota_react/abilities/invoker_cold_snap.png",
    "desc": "Invoker draws the heat from an enemy, chilling them to their very core for a duration based on the level of Quas. The enemy will take damage and be briefly frozen. Further damage taken in this state will freeze the enemy again, dealing bonus damage. The enemy can only be frozen so often, but the freeze cooldown decreases based on the level of Quas.",
    "behavior": [
      "Unit Target",
      "Hidden"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": "18",
    "mc": "100"
  },
  "clinkz_strafe": {
    "dname": "Strafe",
    "img": "/apps/dota2/images/dota_react/abilities/clinkz_strafe.png",
    "desc": "Clinkz gains attack speed and has bonus attack range. Any current Skeleton Archers within a 1200 radius of Clinkz also gain bonus attack range and 50% of the attack speed bonus. \n\n Casting Strafe does not break Skeleton Walk invisibility.",
    "behavior": [
      "No Target",
      "Instant Cast"
    ],
    "bkbpierce": "Yes",
    "cd": [
      "30",
      "25",
      "20",
      "15"
    ],
    "mc": [
      "60",
      "70",
      "80",
      "90"
    ]
  },
  "dark_willow_bedlam": {
    "dname": "Bedlam",
    "img": "/apps/dota2/images/dota_react/abilities/dark_willow_bedlam.png",
    "desc": "Dark Willow sends her pet wisp to roam around herself for the duration, rapidly attacking nearby enemies. Bedlam cannot be used while Terrorize is active.",
    "behavior": [
      "No Target",
      "Instant Cast"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": "30",
    "mc": [
      "100",
      "150",
      "200"
    ]
  },
  "lion_finger_of_death": {
    "dname": "Finger of Death",
    "img": "/apps/dota2/images/dota_react/abilities/lion_finger_of_death.png",
    "desc": "Rips at an enemy unit, trying to turn it inside-out. Deals massive damage and grows stronger with each life it consumes.",
    "behavior": [
      "Unit Target",
      "AOE"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "120",
      "80",
      "40"
    ],
    "mc": [
      "200",
      "400",
      "600"
    ],
    "dmg": [
      "600",
      "725",
      "850"
    ]
  },
  "dark_seer_surge": {
    "dname": "Surge",
    "img": "/apps/dota2/images/dota_react/abilities/dark_seer_surge.png",
    "desc": "Charges a target friendly unit with power, giving it a brief burst of phased movement speed. Allows the unit to reach maximum movement speed and cannot be slowed.",
    "behavior": "Unit Target",
    "bkbpierce": "Yes",
    "cd": [
      "24",
      "19",
      "14",
      "9"
    ],
    "mc": "50"
  },
  "dark_willow_shadow_realm": {
    "dname": "Shadow Realm",
    "img": "/apps/dota2/images/dota_react/abilities/dark_willow_shadow_realm.png",
    "desc": "Dark Willow recedes into the shadows, becoming untargetable. Her next attack has 600 bonus attack range and deals bonus magic damage, and will end Shadow Realm. Damage scales based on how long she remains under the effects of Shadow Realm, the maximum being reached after 3 seconds.",
    "behavior": [
      "No Target",
      "Instant Cast"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "21",
      "19",
      "17",
      "15"
    ],
    "mc": [
      "80",
      "90",
      "100",
      "110"
    ]
  },
  "zuus_lightning_hands": {
    "dname": "Lightning Hands",
    "img": "/apps/dota2/images/dota_react/abilities/zuus_lightning_hands.png",
    "desc": "Zeus gains bonus attack speed and his attacks create Arc Lightnings that deal a percentage of its damage. Can be toggled off to stop this effect.",
    "behavior": "Attack Modifier",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": "0",
    "mc": "0"
  },
  "phantom_assassin_fan_of_knives": {
    "dname": "Fan of Knives",
    "img": "/apps/dota2/images/dota_react/abilities/phantom_assassin_fan_of_knives.png",
    "desc": "Phantom Assassin releases sharp blades around her, dealing a percentage of each victim's max health on impact and applying Break.",
    "behavior": [
      "No Target",
      "Hidden"
    ],
    "dmg_type": "Physical",
    "cd": "14",
    "mc": "80"
  },
  "tusk_bitter_chill": {
    "dname": "Bitter Chill",
    "img": "/apps/dota2/images/dota_react/abilities/tusk_bitter_chill.png",
    "desc": "Passively slows the attack speed of all enemy heroes within 350 radius by 20.",
    "behavior": "Passive"
  },
  "terrorblade_demon_zeal": {
    "dname": "Demon Zeal",
    "img": "/apps/dota2/images/dota_react/abilities/terrorblade_demon_zeal.png",
    "desc": "Costs part of Terrorblade's current HP to cast, providing Terrorblade and nearby illusions bonus movement, HP Regen and attack speed. Reflection illusions gain 50% of the bonuses. Can't be cast while in Metamorphosis and Metamorphosis will remove Demon Zeal",
    "behavior": [
      "No Target",
      "Hidden"
    ],
    "cd": "60",
    "mc": "0"
  },
  "keeper_of_the_light_special_reserve": {
    "dname": "Special Reserve",
    "img": "/apps/dota2/images/dota_react/abilities/keeper_of_the_light_special_reserve.png",
    "desc": "Keeper of the Light cannot go below 75 mana.",
    "behavior": "Passive"
  },
  "ancient_apparition_death_rime": {
    "dname": "Death Rime",
    "img": "/apps/dota2/images/dota_react/abilities/ancient_apparition_death_rime.png",
    "desc": "Ancient Apparition's abilities apply Death Rime Stacks on enemies. Death Rime slows enemies' movement speed and deals damage over time.",
    "behavior": "Passive",
    "dmg_type": "Magical",
    "bkbpierce": "No"
  },
  "arc_warden_tempest_double": {
    "dname": "Tempest Double",
    "img": "/apps/dota2/images/dota_react/abilities/arc_warden_tempest_double.png",
    "desc": "Briefly refocusing its fractured elements into a single form, the Arc Warden is able to create a perfect electrical duplication of itself. The duplicate can use all of Arc Warden's current items and special Tempest Double versions of his spells, except most consumables and items that drop on death. The duplicate has separate item and ability cooldowns.\n\nThe Tempest Double loses its sense of self and fractures over time, becoming slower and less accurate.",
    "behavior": "Point Target",
    "cd": [
      "60",
      "55",
      "50"
    ]
  },
  "bounty_hunter_shuriken_toss": {
    "dname": "Shuriken Toss",
    "img": "/apps/dota2/images/dota_react/abilities/bounty_hunter_shuriken_toss.png",
    "desc": "Hurls a deadly shuriken at an enemy unit, dealing damage and slowing the target's Movement Speed by 100% for 0.35s. The shuriken will bounce to any Tracked units who are within a 1200 radius of each other.",
    "behavior": "Unit Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": "5",
    "mc": [
      "75",
      "80",
      "85",
      "90"
    ],
    "dmg": [
      "100",
      "170",
      "240",
      "310"
    ]
  },
  "vengefulspirit_magic_missile": {
    "dname": "Magic Missile",
    "img": "/apps/dota2/images/dota_react/abilities/vengefulspirit_magic_missile.png",
    "desc": "Fires a magic missile at an enemy unit, stunning and dealing damage.",
    "behavior": "Unit Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "14",
      "13",
      "12",
      "11"
    ],
    "mc": [
      "90",
      "95",
      "100",
      "105"
    ],
    "dmg": [
      "85",
      "170",
      "255",
      "340"
    ]
  },
  "lone_druid_true_form": {
    "dname": "True Form",
    "img": "/apps/dota2/images/dota_react/abilities/lone_druid_true_form.png",
    "desc": "Lone Druid morphs himself into a raging bear, losing his ranged advantage, but gaining bonus armor, bonus health, and bonus attack damage.",
    "behavior": "No Target",
    "cd": [
      "60",
      "55",
      "50"
    ],
    "mc": "80"
  },
  "necrolyte_sadist": {
    "dname": "Sadist",
    "img": "/apps/dota2/images/dota_react/abilities/necrolyte_sadist.png",
    "desc": "Necrophos gains stacking regen for 8 seconds for each unit he kills. Hero kills multiply the effect.",
    "behavior": "Passive"
  },
  "weaver_geminate_attack": {
    "dname": "Geminate Attack",
    "img": "/apps/dota2/images/dota_react/abilities/weaver_geminate_attack.png",
    "desc": "Allows Weaver to dispatch two attacks at once.",
    "behavior": [
      "Unit Target",
      "Autocast",
      "Attack Modifier"
    ],
    "dmg_type": "Physical",
    "bkbpierce": "Yes",
    "cd": [
      "9",
      "7",
      "5",
      "3"
    ]
  },
  "abaddon_borrowed_time": {
    "dname": "Borrowed Time",
    "img": "/apps/dota2/images/dota_react/abilities/abaddon_borrowed_time.png",
    "desc": "When activated, dispels you and all damage dealt to you will heal instead of harm. If the ability is not on cooldown, it will automatically activate if your health falls below 400.\n\nDISPEL TYPE: Strong Dispel",
    "behavior": [
      "No Target",
      "Instant Cast"
    ],
    "cd": [
      "90",
      "85",
      "80"
    ],
    "mc": "0"
  },
  "tiny_tree_grab": {
    "dname": "Tree Grab",
    "img": "/apps/dota2/images/dota_react/abilities/tiny_tree_grab.png",
    "desc": "Grabs a tree to whack enemies on the head for a limited number of attacks. Grants bonus attack range. Attacks deal more damage and fully splash on units along the way. The tree can be thrown, to deal your attack to a unit at a distance.",
    "behavior": "Unit Target",
    "dmg_type": "Physical",
    "bkbpierce": "Yes",
    "cd": [
      "16",
      "15",
      "14",
      "13"
    ],
    "mc": "40"
  },
  "enigma_malefice": {
    "dname": "Malefice",
    "img": "/apps/dota2/images/dota_react/abilities/enigma_malefice.png",
    "desc": "Focuses Enigma's power on a target, causing it to take damage and become repeatedly stunned for multiple instances. An instance strikes every 2 seconds.",
    "behavior": "Unit Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "20",
      "18",
      "16",
      "14"
    ],
    "mc": [
      "100",
      "110",
      "120",
      "130"
    ]
  },
  "rubick_empty1": {
    "dname": "Stolen Spell",
    "img": "/apps/dota2/images/dota_react/abilities/rubick_empty1.png",
    "desc": "Spells acquired with Spell Steal will replace this slot.",
    "behavior": "Passive"
  },
  "keeper_of_the_light_chakra_magic": {
    "dname": "Chakra Magic",
    "img": "/apps/dota2/images/dota_react/abilities/keeper_of_the_light_chakra_magic.png",
    "desc": "Restores mana to the target unit and reduces cooldowns of all basic abilities currently on cooldown by a fixed amount. Is 30% more effective when used on himself.",
    "behavior": "Unit Target",
    "bkbpierce": "Yes",
    "cd": [
      "18",
      "16",
      "14",
      "12"
    ],
    "mc": "0"
  },
  "monkey_king_primal_spring_early": {
    "dname": "Spring Early",
    "img": "/apps/dota2/images/dota_react/abilities/monkey_king_primal_spring_early.png",
    "behavior": [
      "Hidden",
      "No Target",
      "Instant Cast"
    ]
  },
  "bounty_hunter_wind_walk_ally": {
    "dname": "Friendly Shadow",
    "img": "/apps/dota2/images/dota_react/abilities/bounty_hunter_wind_walk_ally.png",
    "desc": "Applies Shadow Walk and all of its bonuses to the target ally. Allied fade time is 0.5s. Does not break Bounty Hunter's invisibility when cast.",
    "behavior": [
      "Unit Target",
      "Instant Cast"
    ],
    "cd": "15",
    "mc": "50"
  },
  "beastmaster_rugged": {
    "dname": "Rugged",
    "img": "/apps/dota2/images/dota_react/abilities/beastmaster_rugged.png",
    "desc": "Beastmaster's melee hero Damage Block Chance is increased from 50% to 100% versus non-hero units and non-building units.",
    "behavior": "Passive"
  },
  "shadow_demon_disseminate": {
    "dname": "Disseminate",
    "img": "/apps/dota2/images/dota_react/abilities/shadow_demon_disseminate.png",
    "desc": "Whenever the target takes damage, all enemies, including the target itself if it is an enemy, within 675 range of the target also receive a portion of that damage. Can target enemy and allied units. Effect is paused if the target is hidden by Disruption.",
    "behavior": [
      "Unit Target",
      "AOE"
    ],
    "bkbpierce": "No",
    "cd": [
      "26",
      "22",
      "18",
      "14"
    ],
    "mc": "100"
  },
  "ringmaster_impalement": {
    "dname": "Impalement Arts",
    "img": "/apps/dota2/images/dota_react/abilities/ringmaster_impalement.png",
    "desc": "Ringmaster throws one of his daggers to a precise point of his choosing. If he strikes an enemy, the dagger deals impact damage, briefly slows the unit hit, and causes them to bleed. The bleeding deals a percentage of the victim's maximum health in damage every second to heroes and flat damage per second to creeps.",
    "behavior": "Point Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": "1",
    "mc": "80"
  },
  "tiny_tree_channel": {
    "dname": "Tree Volley",
    "img": "/apps/dota2/images/dota_react/abilities/tiny_tree_channel.png",
    "desc": "CHANNELED - Tiny channels to throw random trees within range towards the targeted area. Deals Tiny's attack damage to enemies in that area with each tree thrown.",
    "behavior": [
      "Channeled",
      "Point Target",
      "AOE",
      "Hidden"
    ],
    "dmg_type": "Physical",
    "bkbpierce": "Yes",
    "cd": "17",
    "mc": "200"
  },
  "tinker_warp_grenade": {
    "dname": "Warp Flare",
    "img": "/apps/dota2/images/dota_react/abilities/tinker_warp_grenade.png",
    "desc": "Throws a flare towards an enemy, dealing damage, teleporting them away, rooting them and reducing their Cast and Attack Range for 2 seconds.\n\n The teleport location is always the ability's current cast range + 100 from Tinker's position when he threw the flare.",
    "behavior": [
      "Unit Target",
      "Hidden"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": "15",
    "mc": "80",
    "dmg": "150"
  },
  "disruptor_static_storm": {
    "dname": "Static Storm",
    "img": "/apps/dota2/images/dota_react/abilities/disruptor_static_storm.png",
    "desc": "Creates a damaging static storm that also silences all enemy units in the area for the duration. The damage starts off weak, but increases in power over the duration.",
    "behavior": [
      "Point Target",
      "AOE"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "100",
      "85",
      "70"
    ],
    "mc": [
      "125",
      "175",
      "225"
    ]
  },
  "oracle_fortunes_end": {
    "dname": "Fortune's End",
    "img": "/apps/dota2/images/dota_react/abilities/oracle_fortunes_end.png",
    "desc": "CHANNELED - Gathers Oracle's power into a bolt of scouring energy that, when released, damages, roots, and dispels enemies of buffs in an area around the target. If target is an ally it will only dispel debuffs. The root duration increases with channeling time.\n\nDISPEL TYPE: Basic Dispel",
    "behavior": [
      "Unit Target",
      "AOE",
      "Channeled"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "18",
      "14",
      "10",
      "6"
    ],
    "mc": "100",
    "dmg": [
      "100",
      "160",
      "220",
      "280"
    ]
  },
  "nevermore_necromastery": {
    "dname": "Necromastery",
    "img": "/apps/dota2/images/dota_react/abilities/nevermore_necromastery.png",
    "desc": "Shadow Fiend steals the soul from units he kills, gaining bonus damage. Hero kills grant 4 souls. On death, he releases 30% of them from bondage.",
    "behavior": "Passive"
  },
  "lich_death_charge": {
    "dname": "Death Charge",
    "img": "/apps/dota2/images/dota_react/abilities/lich_death_charge.png",
    "desc": "Lich cannot gain passive mana regeneration, but any unit dying within 1500 range of Lich restores 2.5% of his Max Mana (Dying heroes restore 25% of Lich's Max Mana). Instant mana restoration from items and abilities apply to Lich as normal.",
    "behavior": [
      "Passive",
      "Hidden"
    ],
    "cd": [
      "60",
      "50",
      "40",
      "30"
    ]
  },
  "weaver_shukuchi": {
    "dname": "Shukuchi",
    "img": "/apps/dota2/images/dota_react/abilities/weaver_shukuchi.png",
    "desc": "Weaver shifts out of visibility, gaining max movement speed --doing harm to any enemies it passes through.",
    "behavior": [
      "No Target",
      "Instant Cast"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "15",
      "12",
      "9",
      "6"
    ],
    "mc": "65",
    "dmg": [
      "100",
      "130",
      "160",
      "190"
    ]
  },
  "invoker_invoke": {
    "dname": "Invoke",
    "img": "/apps/dota2/images/dota_react/abilities/invoker_invoke.png",
    "desc": "Combines the properties of the elements currently being manipulated to create a new spell for Invoker to use. Invoke cooldown is reduced by 0.3 seconds for each orb level. \n\n Click the help button to see the list of possible spells.",
    "behavior": [
      "No Target",
      "Instant Cast"
    ],
    "cd": "7",
    "mc": "0"
  },
  "razor_eye_of_the_storm": {
    "dname": "Eye of the Storm",
    "img": "/apps/dota2/images/dota_react/abilities/razor_eye_of_the_storm.png",
    "desc": "A powerful lightning storm strikes out at the enemy unit with the lowest health, dealing damage and reducing armor.",
    "behavior": [
      "No Target",
      "Instant Cast"
    ],
    "dmg_type": "Physical",
    "bkbpierce": "Yes",
    "cd": [
      "80",
      "70",
      "60"
    ],
    "mc": [
      "100",
      "150",
      "200"
    ],
    "dmg": [
      "60",
      "75",
      "90"
    ]
  },
  "slark_depth_shroud": {
    "dname": "Depth Shroud",
    "img": "/apps/dota2/images/dota_react/abilities/slark_depth_shroud.png",
    "desc": "Creates a cloud at the target location. All allies inside the radius are hidden and affected by Shadow Dance.",
    "behavior": [
      "Point Target",
      "AOE",
      "Hidden"
    ],
    "cd": "75",
    "mc": "75"
  },
  "night_stalker_void": {
    "dname": "Void",
    "img": "/apps/dota2/images/dota_react/abilities/night_stalker_void.png",
    "desc": "Creates a damaging void that slows an enemy unit and deals damage. At night, Void also mini-stuns, interrupting channeling abilities, and its effects lasts longer.",
    "behavior": "Unit Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "11",
      "10",
      "9",
      "8"
    ],
    "mc": [
      "90",
      "95",
      "100",
      "105"
    ],
    "dmg": [
      "80",
      "160",
      "240",
      "320",
      "400"
    ]
  },
  "magnataur_solid_core": {
    "dname": "Solid Core",
    "img": "/apps/dota2/images/dota_react/abilities/magnataur_solid_core.png",
    "desc": "Magnus has slow resistance and suffers less knockback from enemy's abilities and items.",
    "behavior": "Passive"
  },
  "bristleback_viscous_nasal_goo": {
    "dname": "Viscous Nasal Goo",
    "img": "/apps/dota2/images/dota_react/abilities/bristleback_viscous_nasal_goo.png",
    "desc": "Covers a target in snot, causing it to have reduced armor and movement speed for 5 seconds. Multiple casts stack and refresh the duration.",
    "behavior": "Unit Target",
    "bkbpierce": "No",
    "cd": "1.75",
    "mc": [
      "12",
      "16",
      "20",
      "24"
    ]
  },
  "rubick_telekinesis": {
    "dname": "Telekinesis",
    "img": "/apps/dota2/images/dota_react/abilities/rubick_telekinesis.png",
    "desc": "Rubick uses his telekinetic powers to lift the enemy into the air briefly and then hurls them back at the ground. The unit lands on the ground with such force that it stuns nearby enemies.",
    "behavior": "Unit Target",
    "bkbpierce": "No",
    "cd": [
      "23",
      "20",
      "17",
      "14"
    ],
    "mc": "110"
  },
  "ember_spirit_searing_chains": {
    "dname": "Searing Chains",
    "img": "/apps/dota2/images/dota_react/abilities/ember_spirit_searing_chains.png",
    "desc": "Ember Spirit unleashes fiery bolas that wrap around nearby enemies, anchoring them in place and dealing damage each second.",
    "behavior": "No Target",
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "13",
      "12",
      "11",
      "10"
    ],
    "mc": [
      "95",
      "105",
      "115",
      "125"
    ]
  },
  "phoenix_blinding_sun": {
    "dname": "Blinding Sun",
    "img": "/apps/dota2/images/dota_react/abilities/phoenix_blinding_sun.png",
    "desc": "Phoenix ability debuffs apply a stackable 2% Miss chance per second. Lasts 4 seconds.",
    "behavior": "Passive"
  },
  "largo_encore": {
    "dname": "Encore",
    "img": "/apps/dota2/images/dota_react/abilities/largo_encore.png",
    "desc": "Buffs that Largo applies to himself or his team have extended duration.",
    "behavior": [
      "Passive",
      "Hidden"
    ]
  },
  "juggernaut_blade_fury": {
    "dname": "Blade Fury",
    "img": "/apps/dota2/images/dota_react/abilities/juggernaut_blade_fury.png",
    "desc": "Causes a bladestorm of destructive force around Juggernaut, rendering him debuff immune, increasing his magic resistance by 80%, and dealing damage every 0.2s to nearby enemy units. Applies a strong dispel at the end of the spin.",
    "behavior": [
      "No Target",
      "Instant Cast"
    ],
    "dmg_type": "Magical",
    "bkbpierce": "No",
    "cd": [
      "36",
      "30",
      "24",
      "18"
    ],
    "mc": "120"
  },
  "mirana_leap": {
    "dname": "Leap",
    "img": "/apps/dota2/images/dota_react/abilities/mirana_leap.png",
    "desc": "Mirana leaps forward into battle, empowering herself with a ferocious roar that grants bonus attack and movement speed. Speed bonus lasts 5 seconds.",
    "behavior": "No Target",
    "cd": "0",
    "mc": "50"
  },
  "invoker_quas": {
    "dname": "Quas",
    "img": "/apps/dota2/images/dota_react/abilities/invoker_quas.png",
    "desc": "Allows manipulation of ice elements. Active Quas instances imbue Invoker with bonus hp regeneration. Passively grants bonus strength per level of Quas.",
    "behavior": [
      "No Target",
      "Instant Cast"
    ],
    "cd": "0",
    "mc": "0"
  },
  "chaos_knight_reins_of_chaos": {
    "dname": "Reins of Chaos",
    "img": "/apps/dota2/images/dota_react/abilities/chaos_knight_reins_of_chaos.png",
    "desc": "Whenever illusions of Chaos Knight are created, there is a 50% chance that an additional 1 extra illusion will spawn.",
    "behavior": "Passive"
  },
  "rubick_arcane_supremacy": {
    "dname": "Arcane Supremacy",
    "img": "/apps/dota2/images/dota_react/abilities/rubick_arcane_supremacy.png",
    "desc": "Rubick's mastery of the arcane allows him to have a larger cast range and increased potency.",
    "behavior": "Passive"
  },
  "snapfire_gobble_up": {
    "dname": "Gobble Up",
    "img": "/apps/dota2/images/dota_react/abilities/snapfire_gobble_up.png",
    "desc": "Mortimer gobbles up a creep or an allied hero, which he can then spit towards enemies. The unit stays in his belly up to [object Object] seconds.",
    "behavior": [
      "Unit Target",
      "Hidden"
    ],
    "cd": "40",
    "mc": "120"
  },
  "drow_ranger_marksmanship": {
    "dname": "Marksmanship",
    "img": "/apps/dota2/images/dota_react/abilities/drow_ranger_marksmanship.png",
    "desc": "Drow's experiences in battle grant her a chance to launch arrows with incredible accuracy and effectiveness. Pierces through the enemy's defenses, ignoring their base armor. This ability is disabled if there is an enemy hero within 325 range.",
    "behavior": "Passive",
    "dmg_type": "Physical",
    "bkbpierce": "Yes"
  },
  "nevermore_dark_lord": {
    "dname": "Presence of the Dark Lord",
    "img": "/apps/dota2/images/dota_react/abilities/nevermore_dark_lord.png",
    "desc": "Shadow Fiend's presence reduces the armor of nearby enemies.",
    "behavior": "Passive",
    "bkbpierce": "Yes"
  },
  "furion_teleportation": {
    "dname": "Teleportation",
    "img": "/apps/dota2/images/dota_react/abilities/furion_teleportation.png",
    "desc": "Teleports to any point on the map. Gains a barrier after arriving to its destination.",
    "behavior": [
      "Point Target",
      "AOE"
    ],
    "dmg_type": "Physical",
    "bkbpierce": "No",
    "cd": [
      "65",
      "50",
      "35",
      "20"
    ],
    "mc": [
      "50",
      "60",
      "70",
      "80"
    ]
  },
  "axe_culling_blade": {
    "dname": "Culling Blade",
    "img": "/apps/dota2/images/dota_react/abilities/axe_culling_blade.png",
    "desc": "Axe spots a weakness and strikes, dealing pure damage. When an enemy hero is killed with Culling Blade, its cooldown is reset, and all nearby allied units gain bonus movement speed and armor.",
    "behavior": "Unit Target",
    "dmg_type": "Pure",
    "bkbpierce": "Yes",
    "cd": [
      "80",
      "75",
      "70"
    ],
    "mc": [
      "100",
      "125",
      "150"
    ],
    "dmg": [
      "275",
      "375",
      "475"
    ]
  },
  "leshrac_greater_lightning_storm": {
    "dname": "Nihilism",
    "img": "/apps/dota2/images/dota_react/abilities/leshrac_greater_lightning_storm.png",
    "desc": "Causes Leshrac and all nearby enemies to turn ethereal, preventing them from attacking, slowing them, and making them take more magic damage. Increases Leshrac's speed rather than reducing it. Does not cause Leshrac to take amplified damage.",
    "behavior": "No Target",
    "bkbpierce": "No",
    "cd": "25",
    "mc": "75"
  },
  "alchemist_berserk_potion": {
    "dname": "Berserk Potion",
    "img": "/apps/dota2/images/dota_react/abilities/alchemist_berserk_potion.png",
    "desc": "Alchemist throws a potion at an ally, applying a basic dispel and giving them attack speed, movement speed and HP regen.\n\nDISPEL TYPE: Basic Dispel",
    "behavior": [
      "Unit Target",
      "Hidden"
    ],
    "bkbpierce": "Yes",
    "cd": "35",
    "mc": "100"
  },
  "rubick_telekinesis_land_self": {
    "dname": "Telekinesis Land",
    "img": "/apps/dota2/images/dota_react/abilities/rubick_telekinesis_land_self.png",
    "desc": "Chooses the location you will land when Telekinesis finishes.",
    "behavior": [
      "Point Target",
      "Hidden",
      "AOE",
      "Instant Cast"
    ]
  },
  "magnataur_reverse_polarity": {
    "dname": "Reverse Polarity",
    "img": "/apps/dota2/images/dota_react/abilities/magnataur_reverse_polarity.png",
    "behavior": "No Target",
    "dmg_type": "Magical",
    "bkbpierce": "Yes",
    "cd": "115",
    "mc": [
      "150",
      "225",
      "300"
    ],
    "dmg": [
      "100",
      "200",
      "300"
    ]
  },
  "chen_summon_convert": {
    "dname": "Summon Convert",
    "img": "/apps/dota2/images/dota_react/abilities/chen_summon_convert.png",
    "desc": "Chen summons a convert to fight for him. The convert gains bonuses from Holy Persuasion and dies if Chen dies. Its maximum health is set to 220 + 80 per Chen Level.\n\n The spell stays on cooldown while the convert is alive, but refreshes whenever Chen respawns. The Convert counts towards Holy Persuasion max unit count. The Convert's ability level increases with Chen's level of Holy Persuasion.",
    "behavior": "No Target",
    "cd": "30",
    "mc": "50"
  },
  "spectre_spectral_dagger": {
    "dname": "Spectral Dagger",
    "img": "/apps/dota2/images/dota_react/abilities/spectre_spectral_dagger.png",
    "desc": "Spectre flings a dagger to draw a Shadow Path, dealing damage and slowing the movement speed of any enemies along the trail. Units hit by the dagger also trail a Shadow Path. While treading the path, Spectre moves faster and phases through otherwise impassable terrain.",
    "behavior": [
      "Point Target",
      "Unit Target"
    ],
    "dmg_type": "Magical",
    "cd": [
      "22",
      "20",
      "18",
      "16"
    ],
    "mc": [
      "100",
      "110",
      "120",
      "130"
    ],
    "dmg": [
      "70",
      "120",
      "170",
      "220"
    ]
  },
  "witch_doctor_gris_gris": {
    "dname": "Gris-Gris",
    "img": "/apps/dota2/images/dota_react/abilities/witch_doctor_gris_gris.png",
    "desc": "Witch Doctor gets a Gris-Gris, an item that cannot be dropped or placed in the backpack. When the owner dies, 100% of the gold lost from death is added to the item, and will be refunded when the item is consumed. The value of the Gris-Gris is increased by 1 every 3s. \n\n Right-click to consume and permanently remove the item.",
    "behavior": "Passive"
  },
  "death_prophet_witchcraft": {
    "dname": "Witchcraft",
    "img": "/apps/dota2/images/dota_react/abilities/death_prophet_witchcraft.png",
    "behavior": "Passive"
  },
  "axe_coat_of_blood": {
    "dname": "Coat of Blood",
    "img": "/apps/dota2/images/dota_react/abilities/axe_coat_of_blood.png",
    "desc": "Axe permanently drenches his blade every time he kills an enemy Hero, gaining 0.2 bonus armor for each stack. Killing with Culling Blade gives 3x stacks.",
    "behavior": "Passive"
  },
  "morphling_accumulation": {
    "dname": "Accumulation",
    "img": "/apps/dota2/images/dota_react/abilities/morphling_accumulation.png",
    "desc": "Morphling receives 50% of stat growth bonuses every half level instead of the full bonus at level up. All Attributes bonuses from skill points in the Talent Tree provide an additional +3 to Morphling's primary attribute.",
    "behavior": "Passive"
  },
  "lycan_shapeshift": {
    "dname": "Shapeshift",
    "img": "/apps/dota2/images/dota_react/abilities/lycan_shapeshift.png",
    "desc": "Lycan assumes his lupine form, granting him critical strikes and added vision at night. During Shapeshift, Lycan moves at increased speed and cannot be slowed.",
    "behavior": "No Target",
    "cd": [
      "110",
      "100",
      "90"
    ],
    "mc": "100"
  },
  "kez_ravens_veil": {
    "dname": "Raven's Veil",
    "img": "/apps/dota2/images/dota_react/abilities/kez_ravens_veil.png",
    "desc": "Kez releases a wave of smoke that applies his Mark to nearby enemies, briefly reducing their vision. Kez receives a basic dispel and gains bonus movement speed and invisibility until he attacks or casts a spell.",
    "behavior": [
      "Hidden",
      "No Target"
    ],
    "bkbpierce": "Yes",
    "cd": [
      "40",
      "35",
      "30"
    ],
    "mc": [
      "100",
      "125",
      "150"
    ]
  },
  "rattletrap_jetpack": {
    "dname": "Jetpack",
    "img": "/apps/dota2/images/dota_react/abilities/rattletrap_jetpack.png",
    "desc": "Clockwerk activates a jetpack, gaining flying movement, flying vision, and bonus movement speed. Clockwerk has a severely-limited turn rate during this time and cannot attack. Jetpack can be toggled on and off for the duration of the buff.",
    "behavior": [
      "No Target",
      "Hidden"
    ],
    "cd": "16",
    "mc": "75"
  },
  "ringmaster_the_box": {
    "dname": "Escape Act",
    "img": "/apps/dota2/images/dota_react/abilities/ringmaster_the_box.png",
    "desc": "Ringmaster packs himself or an allied hero into a mobile, extradimensional box. Boxed units gain phased movement, slow resistance, bonus magic resistance, and bonus movement speed. They are also untargetable, muted, silenced, and disarmed. The box will pop open after the effect expires or it moves more than 500 units away.",
    "behavior": "Unit Target",
    "bkbpierce": "No",
    "cd": [
      "38",
      "32",
      "26",
      "20"
    ],
    "mc": "120"
  }
};
