/* Forever Party Draft: shared World of Warcraft: Forever data and ballot helpers.
   Used by index.html (ballot, board, field guide), brief.html (game plan) and launch.html (launch guide).
   Researched Oct 20, 2026 from Blizzard's class deep dives, the Oct 15 beta development notes,
   Blizzard news posts and fan guides (sources listed in FD.sources). Beta details can still change. */

const FD = {
  updated: "Oct 20, 2026",

  /* Class and spec changes vs. original Classic. Oct 15 beta notes win where they differ from the deep dives. */
  classes: {
    warrior: {
      headline: "Rage is steadier: armor and absorbs no longer cut Rage from hits taken, crits give bonus Rage, and stance swaps keep 10 Rage.",
      specs: [
        {name:"Arms", roles:["dps"], kind:"melee", new:"Weaponmaster replaces the weapon specializations. New Spearing Strike, Bloodthrill and Improved Slam."},
        {name:"Fury", roles:["dps"], kind:"melee", new:"Raging Blows makes Whirlwind hit with both weapons. Boundless Rage raises max Rage."},
        {name:"Protection", roles:["tank"], kind:"melee", new:"Charge works in Defensive Stance, blocks give Rage, and Thunder Clap works in Defensive Stance. New Bastion and Focused Rage."},
      ],
      group: ["Battle Shout now reaches the whole raid.", "Victory Rush and Tactical Mastery are baseline.", "Sunder Armor still works alongside a Rogue's Expose Armor."],
      newRaces: ["Skyborne (both factions)"],
    },
    paladin: {
      headline: "Judgement no longer uses up your Seal, Holy Strike arrives at level 6, and Protection is a real tank with Seal of Fury.",
      specs: [
        {name:"Holy", roles:["healer"], kind:"caster", new:"Holy Shock is the 21-point talent on a 10s cooldown. New Light's Vigil gives instant party healing."},
        {name:"Protection", roles:["tank"], kind:"melee", new:"Seal of Fury adds an absorb and its Judgement taunts. New Templar's Bulwark, a shield worth 100% of max health."},
        {name:"Retribution", roles:["dps"], kind:"melee", new:"Seal twisting needs the Twist of Light talent. Sacred Arbiter refreshes every Paladin's Judgement on a target."},
      ],
      group: ["Blessing of Kings is baseline, and Salvation no longer takes a Blessing slot.", "Resistance Auras reach the raid within 30 yards.", "Consecration is baseline at 20. Lay on Hands has a 20-minute cooldown, down from an hour."],
      newRaces: ["Undead (Horde)"],
    },
    hunter: {
      headline: "Aimed Shot is baseline, traps work in combat, and pets scale from your gear with one unique ability per family.",
      specs: [
        {name:"Beast Mastery", roles:["dps"], kind:"ranged", new:"New Summon Hawk and Focused Fire. Intimidation also gives your pet a guaranteed crit."},
        {name:"Marksmanship", roles:["dps"], kind:"ranged", new:"Lone Wolf gives +20% damage with no pet. New Sniper Shot (45 yards) and Careful Aim."},
        {name:"Survival", roles:["dps"], kind:"melee", new:"Becomes a dual-wield melee spec with Predator's Edge, Strider Kick and Lacerating Strikes."},
      ],
      group: ["Trueshot Aura now reaches the whole raid.", "Wolf pets buff party melee attack power. Crocolisks cut enemy healing by 25%.", "New Fox pet family."],
      newRaces: ["Human (Alliance)", "Skyborne (both factions)"],
    },
    rogue: {
      headline: "Assassination gets Mutilate and Venom, poisons get more charges and stack with sharpening stones, and Sap no longer breaks Stealth.",
      specs: [
        {name:"Assassination", roles:["dps"], kind:"melee", new:"New Mutilate (needs daggers) and Venom, a poison finisher."},
        {name:"Combat", roles:["dps"], kind:"melee", new:"Hack and Slash replaces the weapon specializations and adds axes. New Flawless Execution."},
        {name:"Subtlety", roles:["dps"], kind:"melee", new:"New Thousand Cuts, Cutthroat (Ambush outside Stealth) and Quietus."},
      ],
      group: ["Expose Armor is about as strong as 5 Sunders and can stack with Sunder Armor.", "Feint drops twice as much threat."],
      newRaces: ["Skyborne (both factions)"],
    },
    priest: {
      headline: "Every Priest gets Fear Ward and Devouring Plague at 20, and every race has 2 race-specific Priest spells.",
      specs: [
        {name:"Discipline", roles:["healer"], kind:"caster", new:"New Penance, Soul Warding and Renewed Hope."},
        {name:"Holy", roles:["healer"], kind:"caster", new:"New Binding Heal and Prayer of Mending. Lightwell is removed."},
        {name:"Shadow", roles:["dps"], kind:"caster", new:"Shadow Word: Death is baseline at 32. Vampiric Embrace moves earlier in the tree."},
      ],
      group: ["Divine Spirit and Improved Fortitude are baseline. Prayer of Healing heals the target's party.", "Several Priests' Renews can stack on one target.", "Shadow Weaving now only helps the Priest who applied it."],
      newRaces: ["Gnome (Alliance)"],
    },
    shaman: {
      headline: "Totems are faster and easier: a 1-second global cooldown, 5-minute buff totems, preset totem sets and hour-long weapon imbues.",
      specs: [
        {name:"Elemental", roles:["dps"], kind:"caster", new:"Lava Burst is the 21-point talent and Elemental Mastery returns at 31. New Lightning Overload."},
        {name:"Enhancement", roles:["dps"], kind:"melee", new:"Stormstrike has an 8s cooldown. New Maelstrom Weapon. Rockbiter supports short off-tanking."},
        {name:"Restoration", roles:["healer"], kind:"caster", new:"New Water Shield and Riptide, which boosts Chain Heal by 25%."},
      ],
      group: ["Strength of Earth, Grace of Air, Windfury and Flametongue totems now reach the whole raid.", "Windfury is now a buff on players, not a weapon enchant.", "New Totemic Recall, Totemic Projection and preset totem sets."],
      newRaces: ["Dwarf (Alliance)", "Skyborne (Horde)"],
    },
    mage: {
      headline: "Frostfire Bolt at 40, a new scroll-reading skill (Comprehension), and weaker AoE farming.",
      specs: [
        {name:"Arcane", roles:["dps"], kind:"caster", new:"Arcane Blast is a stacking 1.5s cast. New Arcane Wrath and Missile Barrage."},
        {name:"Fire", roles:["dps"], kind:"caster", new:"Ignite is per Mage. New Heating Up gives faster Pyroblasts after crits."},
        {name:"Frost", roles:["dps"], kind:"caster", new:"New Ice Lance and Fingers of Frost. Cold Snap has a 10-minute cooldown."},
      ],
      group: ["Still the group's food, water and portals.", "Winter's Chill and Improved Scorch now only help the casting Mage.", "One point of Improved Counterspell always silences."],
      newRaces: ["Orc (Horde)", "Skyborne (Alliance)"],
    },
    warlock: {
      headline: "Pets scale with your stats, Curse of Agony and Curse of Doom become Banes, and each tree gets a new top talent.",
      specs: [
        {name:"Affliction", roles:["dps"], kind:"caster", new:"New Wrack, Pandemic and Soul Siphon."},
        {name:"Demonology", roles:["dps"], kind:"caster", new:"Demonic Sacrifice lasts 2 hours, and Demonic Pact keeps it with a new demon out."},
        {name:"Destruction", roles:["dps"], kind:"caster", new:"New Incinerate, Bane of Havoc and Shadow and Flame."},
      ],
      group: ["Curse of the Elements boosts all magic damage.", "Healthstones, summons and Soulstones work as before.", "Firestone and Spellstone stack with Wizard Oil."],
      newRaces: ["Troll (Horde)"],
    },
    druid: {
      headline: "Druids keep potions, enchants and racials while shapeshifted, and every Druid gets Revive, an out-of-combat rez, at 12.",
      specs: [
        {name:"Balance", roles:["dps"], kind:"caster", new:"New Eclipse and Insect Swarm. Moonkin Aura gives the whole raid spell crit."},
        {name:"Feral", roles:["tank","dps"], kind:"melee", new:"Lacerate is baseline at 42. Primal Bite replaces Mangle, plus Berserk. Bears gain Rage from dodges."},
        {name:"Restoration", roles:["healer"], kind:"caster", new:"New Wild Growth, a party heal over time. Swiftmend no longer eats your HoT."},
      ],
      group: ["Revive is an out-of-combat rez for every Druid.", "Leader of the Pack and Moonkin Aura reach the whole raid.", "Growl now matches Warrior Taunt."],
      newRaces: ["Skyborne (both factions)"],
    },
  },

  systems: [
    "Talents start at level 10. Each tree has milestone talents at 11, 16, 21 and 31 points.",
    "Dual spec unlocks at level 40 at your class trainer. The cost isn't confirmed.",
    "Many group buffs now reach the whole raid: Battle Shout, Trueshot Aura, Leader of the Pack, Moonkin Aura and four Shaman totems.",
    "Kings, Fortitude, Divine Spirit and Mark of the Wild upgrades are baseline, so buff classes don't burn talents on them.",
    "Several debuffs now only help their caster: Shadow Weaving, Winter's Chill, Improved Scorch and Improved Shadow Bolt.",
    "Melee, ranged and spells each use one hit stat and one crit stat. Weapon skill matters less.",
    "Wands and Auto Shot need half a second of standing still before firing.",
    "Racials changed Oct 15: Human sword skill became +2% crit, Orc axe skill +1% crit, Dwarf mace skill became Earth Fury, Troll Regeneration is 20%, and Skyborne get 3% haste.",
  ],

  /* Starting zones. Classic zones come from beta client data; Zephras Isle is official. */
  starts: {
    orc:{zone:"Valley of Trials", area:"Durotar"}, troll:{zone:"Valley of Trials", area:"Durotar"},
    tauren:{zone:"Camp Narache", area:"Mulgore"}, undead:{zone:"Deathknell", area:"Tirisfal Glades"},
    "sky-h":{zone:"Zephras Isle", area:"levels 1–12"}, "sky-a":{zone:"Zephras Isle", area:"levels 1–12"},
    dwarf:{zone:"Coldridge Valley", area:"Dun Morogh"}, gnome:{zone:"Coldridge Valley", area:"Dun Morogh"},
    human:{zone:"Northshire", area:"Elwynn Forest"}, nelf:{zone:"Shadowglen", area:"Teldrassil"},
  },
  meet: {
    H: "Horde starts usually meet at the Crossroads in the Barrens around level 10–12. Undead can take the zeppelin from Tirisfal to Durotar.",
    A: "Alliance starts usually meet in Stormwind or Westfall around level 10–12. Dwarves and Gnomes take the Deeprun Tram, and Night Elves can use the new Darkshore–Stormwind boat.",
    sky: "Skyborne leave Zephras Isle around level 12. Guides describe a boat to Dalaran, then a portal to Orgrimmar or Stormwind (not confirmed by Blizzard).",
  },

  /* Dungeons. Level ranges follow current beta values and may still shift. side = which faction reaches it easily (our read of the zone). */
  dungeons: [
    {n:"Ragefire Chasm", lo:13, hi:18, zone:"Orgrimmar", side:"H"},
    {n:"Hall of Thanes", lo:13, hi:20, zone:"Under Ironforge", side:"A", isNew:true},
    {n:"Ruins of Lordaeron", lo:15, hi:22, zone:"Tirisfal Glades", side:"H", isNew:true},
    {n:"Wailing Caverns", lo:15, hi:24, zone:"The Barrens", side:"H"},
    {n:"The Deadmines", lo:17, hi:26, zone:"Westfall", side:"A"},
    {n:"Shadowfang Keep", lo:20, hi:30, zone:"Silverpine Forest", side:"H"},
    {n:"Blackfathom Deeps", lo:24, hi:32, zone:"Ashenvale", side:"N"},
    {n:"The Stockade", lo:24, hi:32, zone:"Stormwind", side:"A"},
    {n:"Excavation Site: Wetlands", lo:26, hi:33, zone:"Wetlands", side:"A", isNew:true},
    {n:"City of Dalaran", lo:28, hi:35, zone:"Alterac Mountains", side:"A", isNew:true, note:"Dalaran guards attack Horde on sight, but the dungeon is open to both."},
    {n:"Gnomeregan", lo:29, hi:38, zone:"Dun Morogh", side:"A"},
    {n:"Razorfen Kraul", lo:29, hi:38, zone:"The Barrens", side:"H"},
    {n:"Scarlet Monastery: Graveyard", lo:30, hi:38, zone:"Tirisfal Glades", side:"H"},
    {n:"Scarlet Monastery: Library", lo:33, hi:41, zone:"Tirisfal Glades", side:"H"},
    {n:"The Drowned City", lo:35, hi:40, zone:"Off the Stranglethorn coast", side:"N", isNew:true},
    {n:"Scarlet Monastery: Armory", lo:36, hi:44, zone:"Tirisfal Glades", side:"H"},
    {n:"Razorfen Downs", lo:37, hi:46, zone:"The Barrens", side:"H"},
    {n:"Scarlet Monastery: Cathedral", lo:38, hi:46, zone:"Tirisfal Glades", side:"H"},
    {n:"Krol'dok Stronghold", lo:40, hi:45, zone:"Riverglades", side:"N", isNew:true},
    {n:"Uldaman", lo:41, hi:51, zone:"Badlands", side:"N"},
    {n:"Zul'Farrak", lo:44, hi:54, zone:"Tanaris", side:"N"},
    {n:"Maraudon", lo:46, hi:55, zone:"Desolace", side:"N"},
    {n:"Alcaz Prison", lo:48, hi:53, zone:"Dustwallow Marsh", side:"N", isNew:true},
    {n:"Sunken Temple", lo:50, hi:60, zone:"Swamp of Sorrows", side:"N"},
    {n:"Blackrock Depths", lo:52, hi:60, zone:"Blackrock Mountain", side:"N"},
    {n:"Dire Maul East", lo:54, hi:60, zone:"Feralas", side:"N"},
    {n:"Blackmaw Hold", lo:55, hi:60, zone:"Azshara", side:"N", isNew:true},
    {n:"Lower Blackrock Spire", lo:55, hi:60, zone:"Blackrock Mountain", side:"N"},
    {n:"Dire Maul North and West", lo:56, hi:60, zone:"Feralas", side:"N"},
    {n:"Scholomance", lo:58, hi:60, zone:"Western Plaguelands", side:"N"},
    {n:"Shaper's Terrace", lo:58, hi:60, zone:"Un'Goro Crater", side:"N", isNew:true},
    {n:"Stratholme", lo:58, hi:60, zone:"Eastern Plaguelands", side:"N"},
    {n:"Upper Blackrock Spire", lo:59, hi:60, zone:"Blackrock Mountain", side:"N", size:10},
  ],
  raids: [
    {n:"Barrow Deeps", size:10, bosses:8, zone:"Mount Hyjal", isNew:true, when:"Dec 9"},
    {n:"Hyjal Summit", size:20, bosses:13, zone:"Mount Hyjal", isNew:true, when:"Dec 9"},
    {n:"Onyxia's Lair", size:40, bosses:1, zone:"Dustwallow Marsh", when:"Dec 9"},
  ],
  bgs: [
    {n:"Warsong Gulch", size:"10v10", lv:"10–60"},
    {n:"Arathi Basin", size:"15v15", lv:"20–60"},
    {n:"Darkspear Islands", size:"15v15", lv:"30–60", isNew:true},
    {n:"Alterac Valley", size:"40v40", lv:"51–60"},
  ],

  /* Campfire buffs: each player at a camp can place one crafted object (profession skill 20+). */
  camp: {alchemy:"Mana regeneration", blacksmithing:"Strength", enchanting:"Armor, stats or resistances", engineering:"Repair and reagent bots",
    leatherworking:"Rested XP", tailoring:"Spirit", mining:"Melee attack power", herbalism:"Intellect", skinning:"Critical strike",
    firstaid:"Stamina", fishing:"8% stats"},
  profNotes: [
    "First Aid now makes healing potions (Minor Healing Potion moved from Alchemy) plus anti-poison, anti-disease and anti-bleed items. Alchemy still owns mana potions, elixirs and flasks.",
    "Supply crates: fill them with profession materials for Merchant's Favor, which buys top recipes. Alliance turn in at Three Corners in Redridge, Horde west of the Crossroads.",
    "Over 600 new recipes. Gathering also turns up scarce materials, and Tauren Cultivation can double herb nodes.",
    "Tailoring adds spell-damage gear and bags, Blacksmithing new plate and mail, Enchanting caster wands and off-hands, Engineering a bomb satchel and a glider.",
  ],

  costs: [
    {what:"Subscription", cost:"Required (WoW sub or Game Time)", lvl:null},
    {what:"Heroic Pack", cost:"$29.99: Skyborne race, early name reservation, a mount and an Invite-A-Friend code", lvl:null},
    {what:"Apprentice riding", cost:"About 100g, and the mount may now come with the training", lvl:40},
    {what:"Dual spec", cost:"Not confirmed (one wiki says 10g)", lvl:40},
    {what:"Journeyman riding", cost:"About 1,000g", lvl:60},
  ],

  rulesets: [
    "There are no realms. Each ruleset is one big shared world per region, and you can only group on the same ruleset and faction.",
    "Characters can't move between rulesets. A Hardcore character that dies can transfer out.",
    "On PvP, once you make a character of one faction you can't make the other faction there.",
    "Normal and Roleplay let you opt into PvP. Battlegrounds mix players from Normal, PvP and Roleplay.",
    "Hardcore opens this winter as its own sealed world.",
  ],
  names: [
    "Reservation runs Oct 27 to Nov 3. The opening hour hasn't been announced.",
    "You need a Heroic Pack or higher to reserve. You can create up to 3 characters, and they can't play until launch.",
    "Names have two parts, a first name and a surname. Only the full pair has to be unique, across your whole region. First come, first served.",
    "You pick race, class and looks when you reserve. Race and faction changes haven't been announced.",
  ],
  timeline: [
    {d:"2026-10-21T21:00:00Z", w:"Oct 21", t:"Stress test", s:"2 PM PDT. Any account can join from Battle.net (Game Version › In Development). Everything is wiped afterward."},
    {d:"2026-10-27T17:00:00Z", w:"Oct 27", t:"Name reservation opens", s:"Through Nov 3. Needs a Heroic Pack or higher. Up to 3 characters. Opening hour not announced."},
    {d:"2026-11-04T23:00:00Z", w:"Nov 4", t:"Launch", s:"3 PM PST. No early access. Invite-A-Friend codes let a friend play free Nov 4–11."},
    {d:"2026-12-09T16:00:00Z", w:"Dec 9", t:"Raids open", s:"Barrow Deeps (10 players), Hyjal Summit (20) and Onyxia's Lair (40)."},
    {d:"2027-01-15T17:00:00Z", w:"Winter", t:"Hardcore ruleset", s:"No exact date. Spring 2027 adds 2 raids, 2 dungeons and a new area."},
  ],

  sources: [
    {t:"Blizzard: Mage and Shaman deep dive", u:"https://news.blizzard.com/en-us/article/24302097/"},
    {t:"Blizzard: Priest and Warrior deep dive", u:"https://news.blizzard.com/en-us/article/24301514"},
    {t:"Blizzard: Paladin deep dive (Wowhead mirror)", u:"https://www.wowhead.com/forever/blue-tracker/news/us/world-of-warcraft-forever-class-deep-dives-paladin-world-of-warcraft-blizzard-24302099"},
    {t:"Blizzard: Rogue and Warlock deep dive (Wowhead mirror)", u:"https://www.wowhead.com/forever/blue-tracker/news/us/world-of-warcraft-forever-class-deep-dives-rogue-and-warlock-world-of-warcraft-24310968"},
    {t:"Wowhead: Druid and Hunter deep dives", u:"https://www.wowhead.com/forever/news/druid-and-hunter-class-deep-dives-in-world-of-warcraft-forever-383190"},
    {t:"Blizzard: beta development notes, Oct 15", u:"https://us.forums.blizzard.com/en/wow/t/wow-forever-beta-development-notes-%E2%80%93-updated-october-15/2360696"},
    {t:"Blizzard: choose your ruleset", u:"https://worldofwarcraft.blizzard.com/en-us/news/24302070"},
    {t:"Blizzard: create a name of your own", u:"https://news.blizzard.com/en-us/article/24304161/create-a-name-of-your-own-in-wow-forever"},
    {t:"Blizzard: meet the Skyborne", u:"https://news.blizzard.com/en-us/article/24302071/wow-forever-meet-the-new-skyborne"},
    {t:"Blizzard: pre-purchase and editions", u:"https://news.blizzard.com/en-us/article/24301508/pre-purchase-world-of-warcraft-forever-upgrades-and-begin-your-next-journey-in-azeroth"},
    {t:"Blizzard: stress test", u:"https://news.blizzard.com/en-us/article/24302072/join-the-world-of-warcraft-forever-stress-test"},
    {t:"Blizzard: deep dive panel recap", u:"https://news.blizzard.com/en-us/article/24303313/world-of-warcraft-forever-deep-dive-panel-recap"},
    {t:"Blizzard: what's next panel recap", u:"https://news.blizzard.com/en-us/article/24303862/world-of-warcraft-forever-whats-next-panel-recap"},
    {t:"Blizzard: PvP progression", u:"https://worldofwarcraft.blizzard.com/en-us/news/24303316"},
    {t:"Icy Veins: dungeons overview", u:"https://www.icy-veins.com/wow-forever/dungeons-overview"},
    {t:"Icy Veins: campfire system", u:"https://www.icy-veins.com/wow-forever/news/this-wow-forever-campfire-system-makes-every-profession-worth-leveling/"},
    {t:"Icy Veins: PvP overview", u:"https://www.icy-veins.com/wow-forever/pvp-overview"},
    {t:"Warcraft Tavern: riding", u:"https://www.warcrafttavern.com/forever/guides/riding/"},
    {t:"Warcraft Tavern: experience and rested XP", u:"https://www.warcrafttavern.com/forever/guides/experience/"},
    {t:"Mobalytics: professions overview", u:"https://mobalytics.gg/wow-forever/profile/fierce-sun-30v6cf/guides/wow-forever-professions-overview-everything-you-need-to-know"},
    {t:"Wow Forever Guides: starting zones", u:"https://wowforeverguides.com/leveling/starting-zones"},
    {t:"Conquest Capped: rulesets and name reservation", u:"https://conquestcapped.com/guides/wow-forever/wow-forever-realms/"},
  ],
};

/* Spec helpers: which party roles a ballot's chosen specs cover. No spec chosen = anything the class can do. */
function fdSpecs(c){ return (FD.classes[c] && FD.classes[c].specs) || []; }
function rolesFor(b, c){
  const chosen = (b && b.specBy && b.specBy[c]) || [];
  if (chosen.length){ const r = new Set(); fdSpecs(c).forEach(s=>{ if (chosen.includes(s.name)) s.roles.forEach(x=>r.add(x)); }); if (r.size) return [...r]; }
  return partyRoles(c);
}
function specFor(b, c, role){
  const chosen = (b && b.specBy && b.specBy[c]) || [];
  const fit = fdSpecs(c).filter(s=>s.roles.includes(role));
  return fit.find(s=>chosen.includes(s.name)) || null;
}
function specLabel(b, c, role){ const s = specFor(b, c, role); return s ? s.name + " " : ""; }
function claimOf(b){ return b && b.claim && b.classes.includes(b.claim) ? b.claim : null; }

const LOOT = [["nbg","Need before greed"],["ml","One looter hands it out"],["rr","Take turns"],["any","Don't mind"]];
const LIVE_FIELDS = ["confirm","lvl","lvlAt"];

/* Extra ballot fields added in October 2026. Older ballots simply get the defaults. */
function extraDefaults(){ return {nope:[], specBy:{}, claim:null, chars:[], loot:null, tz:"", upd:"", confirm:null, lvl:null, lvlAt:""}; }
function normExtra(b, n){
  Object.assign(n, extraDefaults());
  if (!b || typeof b!=="object") return n;
  const isCls = c => typeof c==="string" && !!FD.classes[c];
  if (Array.isArray(b.nope)) n.nope = [...new Set(b.nope.filter(c=>isCls(c) && !n.classes.includes(c)))].slice(0,8);
  if (b.specBy && typeof b.specBy==="object") n.classes.forEach(c=>{ const v = b.specBy[c]; if (Array.isArray(v)){ const ok = v.filter(s=>fdSpecs(c).some(x=>x.name===s)).slice(0,2); if (ok.length) n.specBy[c] = ok; } });
  n.claim = isCls(b.claim) && n.classes.includes(b.claim) ? b.claim : null;
  if (Array.isArray(b.chars)) n.chars = b.chars.filter(x=>x && typeof x.n==="string").slice(0,3).map(x=>({n:x.n.slice(0,40), c: isCls(x.c) ? x.c : null, r: !!x.r}));
  n.loot = LOOT.some(o=>o[0]===b.loot) ? b.loot : null;
  n.tz = typeof b.tz==="string" ? b.tz.slice(0,64) : "";
  n.upd = typeof b.upd==="string" ? b.upd.slice(0,40) : "";
  n.confirm = typeof b.confirm==="string" ? b.confirm.slice(0,600) : null;
  n.lvl = Number.isInteger(b.lvl) && b.lvl>=1 && b.lvl<=60 ? b.lvl : null;
  n.lvlAt = typeof b.lvlAt==="string" ? b.lvlAt.slice(0,40) : "";
  return n;
}
function cleanChars(b){ b.chars = (b.chars||[]).filter(x=>x.n.trim()).map(x=>({...x, n:x.n.trim()})); }

/* Starting zones for a set of races, grouped. */
function startGroups(races){
  const g = {}; races.forEach(r=>{ const s = FD.starts[r]; if (!s) return; (g[s.zone] = g[s.zone] || {zone:s.zone, area:s.area, races:new Set()}).races.add(r); });
  return Object.values(g);
}
/* Dungeons that fit a group's levels: everyone at or above the minimum, nobody far above the top. */
function dungeonsFor(levels, side){
  const lv = levels.filter(Boolean); if (!lv.length) return [];
  const lo = Math.min(...lv), hi = Math.max(...lv);
  return FD.dungeons.filter(d => (side ? d.side===side || d.side==="N" : true) && lo >= d.lo-1 && hi <= d.hi && lo <= d.hi-2)
    .sort((a,b)=>Math.abs((a.lo+a.hi)/2-(lo+hi)/2)-Math.abs((b.lo+b.hi)/2-(lo+hi)/2));
}

/* Save a change to your own ballot from the Game plan or Launch guide, keeping every field the ballot already has. */
async function fdSaveMine(raw, patch){
  const t = (()=>{ try { return localStorage.getItem("fpd-voter-token"); } catch(e){ return null; } })();
  if (!t || typeof SUPABASE==="undefined") throw new Error("no token");
  const body = Object.assign({}, raw||{}, patch);
  const r = await fetch(SUPABASE.url.replace(/\/$/,"") + "/rest/v1/rpc/submit_ballot", {method:"POST",
    headers:{apikey:SUPABASE.anonKey, Authorization:"Bearer "+SUPABASE.anonKey, "Content-Type":"application/json"},
    body:JSON.stringify({p_token:t, p_ballot:body})});
  if (!r.ok) throw new Error("HTTP "+r.status);
  return body;
}

/* Calendar file for weekly group nights plus the launch dates. Times are local "floating" times. */
const SLOT_HOURS = {morning:[9,12], afternoon:[13,17], evening:[19,22], late:[22,25]};
function icsFor(nights, title){
  const pad = n => String(n).padStart(2,"0");
  const stamp = new Date().toISOString().replace(/[-:]/g,"").replace(/\.\d+/,"");
  const lines = ["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//Forever Party Draft//EN","CALSCALE:GREGORIAN"];
  const ev = (uid, start, end, summary, rrule, desc) => { lines.push("BEGIN:VEVENT","UID:"+uid+"@forever-party-draft","DTSTAMP:"+stamp,"DTSTART:"+start,"DTEND:"+end,"SUMMARY:"+summary); if (rrule) lines.push("RRULE:"+rrule); if (desc) lines.push("DESCRIPTION:"+desc.replace(/[,;]/g,m=>"\\"+m)); lines.push("END:VEVENT"); };
  const fmt = (d, h) => { const x = new Date(d); x.setHours(0,0,0,0); x.setTime(x.getTime() + h*3600000); return `${x.getFullYear()}${pad(x.getMonth()+1)}${pad(x.getDate())}T${pad(x.getHours())}${pad(x.getMinutes())}00`; };
  const BYDAY = ["MO","TU","WE","TH","FR","SA","SU"];
  (nights||[]).forEach((nt,i)=>{
    const launch = new Date(2026,10,4); const first = new Date(launch); const want = (nt.di+1)%7; while (first.getDay()!==want) first.setDate(first.getDate()+1);
    const [a,b] = SLOT_HOURS[nt.key] || [19,22];
    ev("night"+i+"-"+nt.di+nt.key, fmt(first,a), fmt(first,b), title+" group night", "FREQ=WEEKLY;BYDAY="+BYDAY[nt.di], "From the Forever Party Draft game plan.");
  });
  FD.timeline.slice(0,4).forEach((t,i)=>{ const s = t.d.replace(/[-:]/g,"").replace(/\.\d+/,""); const e = new Date(new Date(t.d).getTime()+3600000).toISOString().replace(/[-:]/g,"").replace(/\.\d+/,""); ev("milestone"+i, s, e, "WoW Forever: "+t.t, null, t.s); });
  lines.push("END:VCALENDAR");
  return lines.join("\r\n");
}
function downloadText(name, text, type){
  const blob = new Blob([text], {type: type||"text/plain"}); const a = document.createElement("a");
  a.href = URL.createObjectURL(blob); a.download = name; document.body.appendChild(a); a.click(); setTimeout(()=>{ URL.revokeObjectURL(a.href); a.remove(); }, 500);
}

/* ---------- Legend: left-side navigation on every page ----------
   Desktop: a fixed sidebar listing every page, with the current page's sections underneath.
   Phone: a "Legend" button in the bottom-left corner opens the same list as a drawer. */
const FD_PAGES = [
  {id:"ballot", label:"My ballot", href:"#ballot", hint:"Vote or update your picks"},
  {id:"results", label:"Party board", href:"#results", hint:"Everyone's picks and the suggested party"},
  {id:"guide", label:"Field guide", href:"#guide", hint:"Classes, races and key dates"},
  {id:"plan", label:"Game plan", href:"#plan", hint:"Decisions, sample parties, lineup lock"},
  {id:"launch", label:"Launch guide", href:"#launch", hint:"Checklist, names, dungeons, costs"},
];
function fdNav(opts){
  if (document.getElementById("fd-nav")) return;
  const e = s => String(s ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const st = document.createElement("style");
  st.textContent = `
#fd-nav{position:fixed;left:0;top:0;bottom:0;width:240px;overflow-y:auto;z-index:30;background:var(--surface);border-right:1px solid var(--line);padding:18px 12px 28px;display:none;font-family:var(--f-body)}
#fd-nav .fd-h{display:flex;align-items:center;justify-content:space-between;margin:0 6px 12px}
#fd-nav .fd-h b{font-family:var(--f-display);font-size:1.12rem;color:var(--fg);font-weight:400}
#fd-nav .fd-x{display:none;border:0;background:none;color:var(--fg);font-size:1.5rem;line-height:1;cursor:pointer;padding:2px 6px}
#fd-nav ul{list-style:none;margin:0;padding:0}
#fd-nav .fd-pages>li{margin-bottom:3px}
#fd-nav .fd-pages>li>a{display:grid;gap:1px;padding:7px 10px;border-radius:8px;text-decoration:none;color:var(--fg)}
#fd-nav .fd-pages>li>a span{font-weight:600;font-size:.95rem;display:flex;align-items:center;gap:8px}
#fd-nav .fd-pages>li>a span svg{width:17px;height:17px;color:var(--gold);flex:none}
#fd-nav .fd-pages>li>a small{padding-left:25px}
#fd-nav .fd-pages>li>a small{font-size:.75rem;color:var(--muted);line-height:1.3}
#fd-nav .fd-pages>li>a:hover{background:var(--surface-2)}
#fd-nav .fd-pages>li.on>a{background:var(--gold-soft)}
#fd-nav .fd-pages>li.on>a span{color:var(--gold)}
#fd-nav .fd-x svg{width:20px;height:20px;display:block}
#fd-nav .fd-secs{margin:4px 0 10px 14px;border-left:1px solid var(--line);padding-left:4px}
#fd-nav .fd-secs a{display:block;padding:4px 8px;font-size:.86rem;color:var(--muted);text-decoration:none;border-radius:6px;line-height:1.3}
#fd-nav .fd-secs li.l2 a{padding-left:20px;font-size:.82rem}
#fd-nav .fd-secs a:hover{color:var(--fg);background:var(--surface-2)}
#fd-nav .fd-secs a.act{color:var(--gold);font-weight:600}
#fd-fab{position:fixed;left:16px;bottom:16px;z-index:28;border:1px solid var(--line);background:var(--surface);color:var(--fg);border-radius:999px;padding:9px 15px;font:inherit;font-size:.92rem;font-weight:600;box-shadow:0 4px 16px rgba(0,0,0,.25);cursor:pointer;display:flex;gap:8px;align-items:center}
#fd-scrim{position:fixed;inset:0;background:rgba(0,0,0,.45);z-index:29;display:none}
@media (min-width:980px){
  body.fd-has-nav{padding-left:264px !important}
  #fd-nav{display:block}
  #fd-fab{display:none}
  body.fd-has-nav .savebar{left:240px}
  body.fd-has-nav .jump{display:none !important}
}
@media (max-width:979.98px){
  body.fd-open #fd-nav{display:block;width:min(300px,86vw);box-shadow:4px 0 24px rgba(0,0,0,.3)}
  body.fd-open #fd-scrim{display:block}
  #fd-nav .fd-x{display:block}
}`;
  document.head.appendChild(st);
  const nav = document.createElement("nav"); nav.id = "fd-nav"; nav.setAttribute("aria-label", "Legend");
  const fab = document.createElement("button"); fab.id = "fd-fab"; fab.type = "button"; fab.setAttribute("aria-label", "Open the legend");
  fab.innerHTML = '<svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M2 4h12M2 8h12M2 12h12" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>Legend';
  const scrim = document.createElement("div"); scrim.id = "fd-scrim";
  document.body.append(nav, scrim, fab); document.body.classList.add("fd-has-nav");
  const close = () => document.body.classList.remove("fd-open");
  fab.onclick = () => { document.body.classList.add("fd-open"); spy(); };
  scrim.onclick = close;
  document.addEventListener("keydown", ev => { if (ev.key==="Escape") close(); });
  const offset = () => { const s = opts.sticky && document.querySelector(opts.sticky); return s && getComputedStyle(s).display!=="none" ? s.getBoundingClientRect().height : 0; };
  let items = [], lastSig = "";
  function build(){
    const cur = typeof opts.current==="function" ? opts.current() : opts.current;
    items = (opts.items() || []).filter(x => x && x.el && x.label);
    const used = new Set();
    items.forEach(x => { if (!x.el.id){ let base = "s-" + x.label.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"").slice(0,40), id = base, k = 2; while (used.has(id) || (document.getElementById(id) && document.getElementById(id)!==x.el)) id = base + "-" + (k++); x.el.id = id; } used.add(x.el.id); });
    const sig = cur + "|" + items.map(x=>x.label+x.level).join("|");
    if (sig === lastSig) { spy(); return; }
    lastSig = sig;
    const tabs = document.querySelector(".tabs"), curTab = tabs && tabs.querySelector('.tab[aria-current="page"], .tab[aria-selected="true"]');
    if (curTab && tabs.scrollWidth > tabs.clientWidth) tabs.scrollLeft = Math.max(0, curTab.offsetLeft - tabs.offsetLeft - (tabs.clientWidth - curTab.offsetWidth)/2);
    nav.innerHTML = `<div class="fd-h"><b>Legend</b><button type="button" class="fd-x" aria-label="Close the legend"><svg viewBox="0 0 20 20" aria-hidden="true"><path d="M5 5l10 10M15 5L5 15" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></button></div>
      <ul class="fd-pages">${FD_PAGES.map(p=>`<li class="${p.id===cur?"on":""}"><a href="${p.href}" data-page="${p.id}" ${p.id===cur?'aria-current="page"':""}><span>${fdIcon(p.id)}${e(p.label)}</span><small>${e(p.hint)}</small></a>${p.id===cur && items.length ? `<ul class="fd-secs">${items.map((x,i)=>`<li class="l${x.level||1}"><a href="#${e(x.el.id)}" data-i="${i}">${e(x.label)}</a></li>`).join("")}</ul>` : ""}</li>`).join("")}</ul><div class="fd-fx fx-ctl" data-fx-ctl></div>`;
    if (window.FX) FX.mount();
    spy();
  }
  nav.onclick = ev => {
    if (ev.target.closest(".fd-x")) { close(); return; }
    const a = ev.target.closest("a"); if (!a) return;
    if (a.dataset.i !== undefined){ ev.preventDefault(); const x = items[+a.dataset.i]; if (!x) return; close();
      const y = x.el.getBoundingClientRect().top + window.scrollY - offset() - 12; window.scrollTo({top:Math.max(0,y), behavior:"smooth"}); return; }
    if (a.dataset.page && opts.onPage && opts.onPage(a.dataset.page)) { ev.preventDefault(); if (window.innerWidth >= 980) close(); lastSig = ""; setTimeout(build, 30); }
  };
  function spy(){
    const sb = document.getElementById("savebar");
    fab.style.bottom = (sb && !sb.hidden ? sb.offsetHeight + 12 : 16) + "px";
    const off = offset() + 70; let act = -1;
    items.forEach((x,i) => { if (x.el.offsetParent !== null && x.el.getBoundingClientRect().top - off <= 0) act = i; });
    if (act < 0 && items.length) act = 0;
    const links = nav.querySelectorAll(".fd-secs a");
    links.forEach((a,i) => a.classList.toggle("act", i===act));
    const a = links[act];
    if (a && (a.offsetTop < nav.scrollTop + 40 || a.offsetTop > nav.scrollTop + nav.clientHeight - 60)) nav.scrollTop = a.offsetTop - nav.clientHeight/2;
  }
  let raf = 0; window.addEventListener("scroll", () => { if (!raf) raf = requestAnimationFrame(() => { raf = 0; spy(); }); }, {passive:true});
  window.addEventListener("resize", spy);
  let t = 0; if (opts.root) new MutationObserver(() => { clearTimeout(t); t = setTimeout(build, 150); }).observe(opts.root, {childList:true, subtree:true, attributes:true, attributeFilter:["hidden"]});
  window.fdNavRefresh = () => { lastSig = ""; build(); };
  build();
}

/* ---------- Shared header bits: date chips and the invite button ---------- */
function fdDates(el){
  if (!el) return;
  const e = s => String(s ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const now = Date.now(); let nextSet = false;
  el.innerHTML = FD.timeline.slice(0,4).map(x=>{
    const t = new Date(x.d).getTime(), days = Math.ceil((t-now)/86400000);
    let cls = "date", when;
    if (t < now){ cls += " past"; when = "done"; }
    else { if (!nextSet){ cls += " next"; nextSet = true; } when = days<=1 ? (t-now<86400000 ? "today" : "1 day") : days+" days"; }
    return `<div class="${cls}" title="${e(x.s)}"><b>${e(when)}</b><span>${e(x.t)}</span></div>`;
  }).join("");
}
async function fdInvite(){
  const url = location.href.replace(/[#?].*$/, "").replace(/[^/]*$/, "");
  const say = m => { if (typeof toast==="function") toast(m); };
  try { if (navigator.share){ await navigator.share({title:"Forever Party Draft", text:"Vote on our WoW Forever party: classes, faction, ruleset, schedule and names.", url}); return; } } catch(e){ if (e && e.name==="AbortError") return; }
  try { await navigator.clipboard.writeText(url); say("Invite link copied."); } catch(e){ say("Share this link: " + url); }
}

/* ---------- Original artwork: icons, class emblems and the hero illustration (drawn for this site) ---------- */
const FD_ICONS = {
  ballot:'<path d="M4 4h16v16H4z"/><path d="M8 12l3 3 5-6"/>',
  results:'<circle cx="8" cy="8" r="3"/><path d="M2 20c0-3 3-5 6-5s6 2 6 5"/><path d="M16 5a3 3 0 0 1 0 6"/><path d="M18 15c2 .5 4 2 4 5"/>',
  guide:'<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 5v16"/><path d="M8 7h7"/>',
  plan:'<path d="M3 6l6-3 6 3 6-3v15l-6 3-6-3-6 3z"/><path d="M9 3v15"/><path d="M15 6v15"/>',
  launch:'<path d="M5 21V4"/><path d="M5 4h11l-2 4 2 4H5"/>',
  list:'<path d="M8 6h13M8 12h13M8 18h13M3.5 6h.5M3.5 12h.5M3.5 18h.5"/>',
  check:'<circle cx="12" cy="12" r="9"/><path d="M8 12l3 3 5-6"/>',
  sliders:'<path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12"/><path d="M14 4v4M8 10v4M16 16v4"/>',
  shield:'<path d="M12 3l8 3v6c0 5-4 8-8 9-4-1-8-4-8-9V6z"/>',
  layers:'<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 13l9 5 9-5"/>',
  clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>',
  user:'<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/>',
  calendar:'<path d="M4 6h16v14H4zM4 10h16M8 3v4M16 3v4"/>',
  quill:'<path d="M20 4c-6 1-11 6-13 13l-3 3"/><path d="M7 17c3 0 6-1 8-4"/>',
  pin:'<path d="M12 21s-7-6-7-11a7 7 0 0 1 14 0c0 5-7 11-7 11z"/><circle cx="12" cy="10" r="2"/>',
  sparkle:'<path d="M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2z"/><path d="M19 3v4M17 5h4"/>',
  gate:'<path d="M5 21V10a7 7 0 0 1 14 0v11"/><path d="M3 21h18M12 13v3"/>',
  fire:'<path d="M12 3c2 3 4 4 4 7a4 4 0 0 1-8 0c0-2 1-3 2-4 0 2 1 3 2 3 0-2-1-4 0-6z"/><path d="M5 21l14-3M5 18l14 3"/>',
  coins:'<ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v6c0 1.7 3 3 7 3s7-1.3 7-3V6"/><path d="M5 12v6c0 1.7 3 3 7 3s7-1.3 7-3v-6"/>',
  swords:'<path d="M4 20L20 4M20 20L4 4M7 14l3 3M17 14l-3 3"/>',
  scales:'<path d="M12 3v18M5 7h14M8 21h8"/><path d="M5 7l-3 7h6zM19 7l-3 7h6z"/>',
  book:'<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 5v16"/>',
  bars:'<path d="M5 20V10M12 20V4M19 20v-7"/>',
  flag:'<path d="M5 21V4"/><path d="M5 4h11l-2 4 2 4H5"/>',
};
function fdIcon(name){ const p = FD_ICONS[name]; return p ? `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${p}</svg>` : ""; }
const FD_EMBLEM = {
  warrior:'<path d="M4 20L18 6M20 20L6 6"/><path d="M18 6l1.5-3.5L21 4l-1.5 1.5zM6 6L4.5 2.5 3 4l1.5 1.5z"/><path d="M7 15l2 2M17 15l-2 2"/>',
  paladin:'<path d="M6 4h12v5H6z"/><path d="M12 9v12"/><path d="M3 4.5h1M20 4.5h1M3 8.5h1M20 8.5h1"/>',
  hunter:'<path d="M7 3c6 4 6 14 0 18"/><path d="M7 3v18"/><path d="M3 12h15"/><path d="M15 9l3 3-3 3"/>',
  rogue:'<path d="M12 2l2.5 4.5V15h-5V6.5z"/><path d="M7.5 15h9"/><path d="M12 15v4.5"/><circle cx="12" cy="21" r="1"/>',
  priest:'<circle cx="12" cy="12" r="3.2"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l2.6 2.6M16.4 16.4L19 19M19 5l-2.6 2.6M7.6 16.4L5 19"/>',
  shaman:'<path d="M13.5 2L5 14h6l-1.5 8L18 10h-6z"/>',
  mage:'<path d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4z"/><circle cx="12" cy="12" r="1.4"/>',
  warlock:'<path d="M12 22c-4 0-7-3-7-7 0-4 4-6 4-11 3 2 4 5 3 8 1-1 2-2 2-4 3 2 5 5 5 7 0 4-3 7-7 7z"/><path d="M12 22c-1.6 0-3-1.3-3-3 0-1.6 1.4-2.6 2-4 1.6 1 4 2.4 4 4 0 1.7-1.4 3-3 3z"/>',
  druid:'<path d="M5 19C5 9 11 4 20 4c0 9-5 15-15 15z"/><path d="M5 19l9-9"/>',
};
function fdEmblem(c){ const p = FD_EMBLEM[c]; return p ? `<svg class="emb" viewBox="0 0 24 24" aria-hidden="true" style="color:var(--c-${c})" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${p}</svg>` : ""; }
const FD_SEC_ICONS = [[/short version/i,"list"],[/^decisions/i,"check"],[/adjustments|could change/i,"sliders"],[/lineup|suggested party|role coverage/i,"shield"],[/sample parties/i,"layers"],[/when (to|we can) play/i,"clock"],[/your plan/i,"user"],[/happens next|before oct|key dates/i,"calendar"],[/^the party$|everyone's picks|^races$/i,"results"],[/^names$/i,"quill"],[/start/i,"pin"],[/new for your classes|party brings|^classes$/i,"sparkle"],[/dungeons/i,"gate"],[/professions|campfire/i,"fire"],[/costs/i,"coins"],[/raids|pvp/i,"swords"],[/ruleset/i,"scales"],[/sources/i,"book"],[/standings|gear overlap/i,"bars"],[/faction/i,"flag"],[/landing/i,"plan"],[/how forever works|race and class/i,"guide"]];
function fdDecorate(root){
  if (!root) return;
  root.querySelectorAll(".sec-head h2, .panel-head h3, .panel > h3, .panel-head h2, .verdict h2").forEach(h=>{
    if (h.querySelector(".sic") || h.closest(".cg")) return;
    const t = h.textContent.trim(); const hit = FD_SEC_ICONS.find(([re])=>re.test(t));
    if (hit) h.insertAdjacentHTML("afterbegin", `<span class="sic">${fdIcon(hit[1])}</span>`);
  });
}
const FD_ART = `<svg viewBox="0 0 480 300" preserveAspectRatio="xMidYMax slice" role="img" aria-label="Five adventurers walking toward a hilltop keep under a full moon">
<defs>
<linearGradient id="fdSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#121839"/><stop offset=".55" stop-color="#382a5c"/><stop offset=".85" stop-color="#93573f"/><stop offset="1" stop-color="#d98a4a"/></linearGradient>
<radialGradient id="fdGlow" cx=".72" cy=".27" r=".46"><stop offset="0" stop-color="#ffe7a8" stop-opacity=".42"/><stop offset="1" stop-color="#ffe7a8" stop-opacity="0"/></radialGradient>
<radialGradient id="fdHalo" cx=".5" cy=".5" r=".5"><stop offset=".5" stop-color="#fff2cc" stop-opacity=".3"/><stop offset="1" stop-color="#fff2cc" stop-opacity="0"/></radialGradient>
<radialGradient id="fdMoon" cx=".38" cy=".36" r=".72"><stop offset="0" stop-color="#fffaf0"/><stop offset=".72" stop-color="#f2e0b4"/><stop offset="1" stop-color="#d6bb85"/></radialGradient>
<linearGradient id="fdMist" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e3b94f" stop-opacity="0"/><stop offset="1" stop-color="#e3b94f" stop-opacity=".2"/></linearGradient>
<radialGradient id="fdFly"><stop offset="0" stop-color="#fff6c4"/><stop offset=".35" stop-color="#ffd56a" stop-opacity=".75"/><stop offset="1" stop-color="#ffd56a" stop-opacity="0"/></radialGradient>
</defs>
<rect width="480" height="300" fill="url(#fdSky)"/>
<rect width="480" height="300" fill="url(#fdGlow)"/>
<g fill="#fff6dc"><circle cx="40" cy="30" r="1.2"/><circle cx="92" cy="58" r=".9"/><circle cx="150" cy="22" r="1.4"/><circle cx="210" cy="48" r="1"/><circle cx="262" cy="18" r="1.1"/><circle cx="420" cy="40" r="1.3"/><circle cx="455" cy="88" r=".9"/><circle cx="120" cy="96" r=".8"/><circle cx="300" cy="70" r=".8"/><circle cx="18" cy="84" r="1"/><circle cx="188" cy="88" r=".7"/><circle cx="400" cy="12" r=".8"/></g>
<circle cx="346" cy="82" r="64" fill="url(#fdHalo)"/>
<circle cx="346" cy="82" r="30" fill="url(#fdMoon)"/>
<g fill="#b89a66" opacity=".3"><circle cx="336" cy="74" r="5.2"/><circle cx="356" cy="93" r="7"/><circle cx="353" cy="67" r="3"/><circle cx="332" cy="94" r="2.6"/><circle cx="366" cy="78" r="2"/></g>
<path d="M0 205L60 160L104 186L170 126L232 182L292 140L352 188L414 150L480 178V300H0Z" fill="#2c2550"/>
<path d="M292 140L352 188M414 150L480 178M170 126L232 182M60 160L104 186" stroke="#a594e0" stroke-opacity=".3" stroke-width="1.4" fill="none" stroke-linecap="round"/>
<path d="M0 238L84 192L140 222L214 176L282 216L360 186L430 214L480 196V300H0Z" fill="#1f1a3a"/>
<path d="M214 176L282 216M360 186L430 214" stroke="#a594e0" stroke-opacity=".18" stroke-width="1.2" fill="none" stroke-linecap="round"/>
<path d="M150 236L178 196L200 204L226 168L252 200L278 190L304 236Z" fill="#171329"/>
<g fill="#110e20"><rect x="204" y="150" width="14" height="40"/><rect x="232" y="134" width="16" height="56"/><rect x="258" y="156" width="14" height="34"/><rect x="214" y="168" width="48" height="24"/>
<path d="M204 150h3v-4h3v4h2v-4h3v4h3v4h-14zM232 134h3v-5h3v5h3v-5h3v5h4v4h-16zM258 156h3v-4h3v4h2v-4h3v4h3v4h-14z"/></g>
<path d="M240 129V112" stroke="#110e20" stroke-width="2"/><path d="M241 112h16l-4 4 4 4h-16z" fill="#e3b94f"/>
<g fill="#ffd27a"><rect x="238" y="150" width="3" height="5" rx="1"/><rect x="210" y="166" width="2.5" height="4" rx="1"/><rect x="263" y="168" width="2.5" height="4" rx="1"/><rect x="243" y="176" width="2.5" height="4" rx="1"/></g>
<rect y="200" width="480" height="100" fill="url(#fdMist)"/>
<path d="M134 252Q176 246 214 236" stroke="#e8c48a" stroke-opacity=".2" stroke-width="4" fill="none" stroke-linecap="round"/>
<path d="M0 270Q120 238 240 260T480 252V300H0Z" fill="#0d0b19"/>
<g transform="translate(100 254) scale(1.45) translate(-100 -254)"><g fill="#0d0b19" stroke="#e8c37a" stroke-opacity=".55" stroke-width=".6" stroke-linejoin="round"><path d="M122 251.3l1-7.4h4l1 7.4z"/><circle cx="125" cy="241.7" r="2.1"/><circle cx="129.4" cy="246.6" r="2.4"/><path d="M109 251.9l1-7.4h4l1 7.4z"/><circle cx="112" cy="242.3" r="2.1"/><path d="M109.4 241.4L112 235.6l2.6 5.8z"/><path d="M115.6 251.9l1-13.4" stroke-width="1"/><path d="M96 252.8l1-7.4h4l1 7.4z"/><circle cx="99" cy="243.2" r="2.1"/><path d="M95.6 240q-3.2 6.4 0 12.8" fill="none" stroke-width=".9"/><path d="M83 254.0l1-7.4h4l1 7.4z"/><circle cx="86" cy="244.4" r="2.1"/><path d="M89 247.6v1.6" stroke-width=".8"/><path d="M69 255.7l1-7.4h4l1 7.4z"/><circle cx="72" cy="246.1" r="2.1"/><path d="M68.6 247.6l7.6-7" stroke-width="1.1"/></g>
<circle cx="116.7" cy="238" r="4.5" fill="#3FC7EB" opacity=".3"/><circle cx="116.7" cy="238" r="1.4" fill="#bff1ff"/>
<circle cx="89.4" cy="250.6" r="5.5" fill="#ffd56a" opacity=".32"/><circle cx="89.4" cy="250.6" r="1.5" fill="#fff2b8"/></g>
<g><circle cx="60" cy="230" r="4" fill="url(#fdFly)"/><circle cx="188" cy="224" r="3.4" fill="url(#fdFly)"/><circle cx="412" cy="232" r="3.6" fill="url(#fdFly)"/><circle cx="300" cy="242" r="3" fill="url(#fdFly)"/><circle cx="448" cy="212" r="2.8" fill="url(#fdFly)"/></g>
<g stroke="#0d0b19" stroke-width="1.6" fill="none" stroke-linecap="round"><path d="M96 120q4-4 8 0q4-4 8 0"/><path d="M122 104q3-3 6 0q3-3 6 0"/><path d="M402 120q3-3 6 0q3-3 6 0"/></g>
</svg>`;
