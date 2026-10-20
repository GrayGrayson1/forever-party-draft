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
