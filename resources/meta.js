// Dota 2 Meta - Immortal Rank, All Pick, Last 7 Days
// Source: https://www.dotabuff.com/heroes (carry/mid/offlane by pick rate)
//         https://skycoach.gg + https://hawk.live (support tier lists)
// Scraped: 2026-02-16
// Heroes listed from most played to least played per role.

const META_CARRY = [
  'Shadow Fiend', 'Slark', 'Clinkz', 'Drow Ranger', 'Ursa',
  'Anti-Mage', 'Morphling', 'Juggernaut', 'Luna', 'Templar Assassin',
  'Phantom Lancer', 'Phantom Assassin', 'Windranger', 'Faceless Void', 'Weaver',
  'Lifestealer', 'Muerta', 'Kez', 'Gyrocopter', 'Medusa',
  'Sven', 'Spectre', 'Razor', 'Terrorblade', 'Monkey King',
  'Dragon Knight', 'Chaos Knight', 'Broodmother', 'Wraith King', 'Alchemist',
  'Troll Warlord', 'Bloodseeker', 'Riki', 'Sniper', 'Naga Siren',
  "Nature's Prophet", 'Pudge', 'Necrophos', 'Viper', 'Marci',
  'Lina', 'Abaddon', 'Beastmaster', 'Huskar', 'Omniknight',
  'Storm Spirit', 'Tiny', 'Lone Druid', 'Queen of Pain', 'Zeus',
  'Meepo', 'Tinker', 'Leshrac', 'Bristleback', 'Venomancer',
  'Arc Warden', 'Mirana', 'Void Spirit', 'Vengeful Spirit', 'Magnus',
  'Underlord', 'Batrider', 'Outworld Destroyer', 'Legion Commander', 'Lycan',
  'Chen', 'Ember Spirit',
];

const META_MIDLANER = [
  'Invoker', 'Queen of Pain', 'Shadow Fiend', 'Ember Spirit', 'Puck',
  'Storm Spirit', 'Lina', 'Tinker', 'Void Spirit', 'Huskar',
  'Rubick', 'Sniper', 'Necrophos', 'Outworld Destroyer', 'Leshrac',
  'Tiny', 'Viper', 'Arc Warden', 'Zeus', 'Skywrath Mage',
  'Beastmaster', 'Earthshaker', 'Broodmother', 'Pudge', 'Magnus',
  'Windranger', 'Primal Beast', 'Kez', 'Keeper of the Light', 'Meepo',
  'Razor', 'Batrider', 'Earth Spirit', 'Monkey King', 'Kunkka',
  'Marci', 'Dragon Knight', 'Sand King', 'Clinkz', 'Death Prophet',
  'Visage', 'Slardar', 'Lion', 'Timbersaw', 'Phoenix',
  'Lone Druid', 'Templar Assassin', 'Pangolier', 'Riki', 'Largo',
  'Nyx Assassin', "Nature's Prophet", 'Muerta', 'Morphling', 'Mirana',
  'Slark', 'Alchemist', 'Mars', 'Io', 'Legion Commander',
  'Tusk', 'Anti-Mage', 'Pugna', 'Jakiro', 'Dawnbreaker',
  'Ogre Magi', 'Lycan', 'Dark Willow', 'Snapfire', 'Silencer',
  'Dazzle', 'Omniknight', 'Axe', 'Bounty Hunter', 'Night Stalker',
  'Enchantress', 'Techies', 'Vengeful Spirit', 'Weaver', 'Faceless Void',
  'Enigma', 'Winter Wyvern', 'Brewmaster', 'Ancient Apparition', 'Oracle',
  'Bloodseeker', 'Hoodwink', 'Bristleback', 'Venomancer', 'Underlord',
  'Bane', 'Spirit Breaker', 'Ursa', 'Drow Ranger', 'Undying',
];

const META_OFFLANER = [
  'Razor', 'Mars', 'Underlord', 'Axe', 'Legion Commander',
  'Tidehunter', 'Magnus', 'Pudge', 'Centaur Warrunner', 'Slardar',
  'Largo', 'Beastmaster', 'Timbersaw', 'Omniknight', 'Primal Beast',
  'Dawnbreaker', 'Night Stalker', 'Viper', 'Necrophos', 'Dark Seer',
  'Bristleback', 'Earthshaker', 'Windranger', 'Kunkka', 'Phoenix',
  'Brewmaster', 'Enigma', 'Sand King', 'Tiny', 'Batrider',
  'Wraith King', 'Visage', 'Chaos Knight', 'Undying', 'Doom',
  'Death Prophet', 'Venomancer', 'Lycan', 'Huskar', 'Marci',
  'Ogre Magi', 'Alchemist', 'Dragon Knight', 'Spirit Breaker', 'Weaver',
  'Vengeful Spirit', 'Queen of Pain', 'Broodmother', 'Rubick', 'Faceless Void',
  'Pangolier', 'Abaddon', 'Earth Spirit', 'Void Spirit', 'Tusk',
  'Winter Wyvern', 'Nyx Assassin', 'Slark', 'Elder Titan', "Nature's Prophet",
  'Lone Druid', 'Mirana', 'Sniper', 'Zeus', 'Invoker',
  'Techies', 'Riki', 'Leshrac', 'Snapfire', 'Tinker',
  'Ursa', 'Monkey King', 'Shadow Fiend', 'Enchantress', 'Clockwerk',
  'Hoodwink', 'Dazzle', 'Jakiro', 'Kez', 'Ember Spirit',
  'Treant Protector', 'Bounty Hunter', 'Skywrath Mage', 'Lina', 'Muerta',
  'Keeper of the Light', 'Clinkz', 'Lion', 'Anti-Mage', 'Bloodseeker',
  'Dark Willow', 'Medusa', 'Io', 'Sven', 'Pugna',
];

const META_SOFT_SUPPORT = [
  'Largo', 'Bounty Hunter', 'Earthshaker', 'Spirit Breaker', 'Pudge',
  'Lion', 'Rubick', 'Dark Willow', 'Shadow Shaman', 'Clockwerk',
  'Zeus', 'Silencer', 'Snapfire', 'Skywrath Mage', 'Marci',
  'Phoenix', 'Weaver', 'Keeper of the Light', 'Vengeful Spirit', 'Witch Doctor',
  'Techies', 'Hoodwink', 'Disruptor', 'Ogre Magi', 'Gyrocopter',
  'Shadow Demon', 'Treant Protector', 'Chen', 'Alchemist', 'Bane',
  'Visage', 'Pugna', "Nature's Prophet", 'Venomancer', 'Undying',
  'Invoker', 'Enigma', 'Enchantress', 'Dazzle', 'Io',
  'Windranger', 'Winter Wyvern', 'Riki', 'Mirana', 'Ringmaster', 'Tinker',
];

const META_HARD_SUPPORT = [
  'Pugna', 'Venomancer', 'Silencer', 'Clockwerk', 'Rubick',
  'Undying', 'Crystal Maiden', 'Lich', 'Warlock', 'Jakiro',
  'Shadow Shaman', 'Dark Willow', 'Ogre Magi', 'Disruptor', 'Winter Wyvern',
  'Dazzle', 'Oracle', 'Lion', 'Bane', 'Vengeful Spirit',
  'Shadow Demon', 'Treant Protector', 'Phoenix', 'Snapfire', 'Abaddon',
  'Witch Doctor', 'Keeper of the Light', 'Marci', 'Chen', 'Earthshaker',
  'Hoodwink', 'Zeus', 'Invoker', 'Batrider', 'Spirit Breaker',
  'Enchantress', 'Grimstroke', 'Alchemist', 'Weaver', 'Omniknight',
  "Nature's Prophet", 'Enigma', 'Clinkz', 'Kunkka',
];

const META_ALL = [META_CARRY, META_MIDLANER, META_OFFLANER, META_SOFT_SUPPORT, META_HARD_SUPPORT];
