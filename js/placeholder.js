// Toggle sections (fix for Anthropology button not switching)
function showSection(id, btn) {
  const sections = document.querySelectorAll('.collection-section');
  sections.forEach(s => s.style.display = (s.id === id ? 'block' : 'none'));

  // update aria-expanded on buttons if provided
  document.querySelectorAll('.secondary-nav button').forEach(b => {
    b.setAttribute('aria-expanded', String(b === btn));
  });

  // focus the section heading for a11y
  const heading = document.querySelector('#' + id + ' .section-title');
  if (heading) heading.focus({ preventScroll: true });
}

// ------- DATA -------
// One array per section; each item has all 14 fields + image + alt

const ARCH_DATA = [
  {
    image: "../images/collections/handcarvedwoodendogwhistle.png",
    alt: "Black-and-white field photo of a cedar dog whistle on cloth, with notes and tools.",
    name: "Hand-Carved Wooden Dog Whistle",
    material: "Western red cedar body, twisted cedar bark cord, faint traces of spruce resin that still hold a ghost of a forest scent if warmed in the hand.",
    size: "9.1 cm × 1.6 cm; ~14 g; slender, tapered tube with a whisper-thin mouth opening.",
    age: "Precise dating is still under review; the piece is currently undergoing high-resolution stratigraphic scanning and isotope analysis by a joint team of preservation scientists and chronometry specialists to narrow its origin down to the exact year—and possibly even the month—of creation. Estimated Completion Date for Analysis: April 17, 2026.",
    pres: "Complete; cedar shows faint surface checking; cord frayed at the knot as though repeatedly untied and retied in haste.",
    loc: "Double Lakes bluff, Site D-2, 32–36 cm depth, silty loam dusted with reed fragments.",
    use: "Acoustic signal device.",
    purpose: "To send precise, far-carrying commands to working dogs navigating open water or weaving through dense reed beds — the sort of whistle a handler could lift without breaking stride.",
    evidence: "Smooth lip polish on the mouth end; two shallow tooth nicks just below the notch — telltale signs of an eager retriever trying to “help” — and a burnished suspension groove worn glossy from years of swinging at a handler’s side.",
    manu: "Central channel hand-bored; knife-cut notch clean but slightly asymmetrical; lathe-smoothed exterior faintly ridged where the grain resisted.",
    foundwith: "Leather strap fragment, copper button stamped with a worn hunting motif, seed husks likely from dockside grain sacks.",
    context: "Collapsed bank layer mixed with domestic debris — possibly from a shoreline homestead.",
    symbol: "While undecorated, the whistle’s plain form suggests it was meant for work, not show — yet to those who know, the first trill after a long day’s hunt can carry as much emotion as any spoken word.",
    comp: "Similar in form to rural handmade whistles documented in Pacific Northwest hunting kits, though the tooth marks make this one unmistakably personal."
  },
  {
    image: "../images/collections/wirehairedpointinggriffondoll.png",
    alt: "Black-and-white field photo of a handmade Wirehaired Pointing Griffon doll on cloth in a tent.",
    name: "Wirehaired Pointing Griffon Doll",
    material: "Hand-tanned deerskin panels stitched with sinew, stuffed with a blend of dried moss and shed undercoat from a real dog, eyes formed from polished river stones flecked with mica to mimic the living sparkle, and detailing brushed with natural ochre and charcoal pigments.",
    size: "21 cm nose-to-tail × 12 cm high; ~190 g; seated posture with head subtly tilted as though attentive to a distant call.",
    age: "Precise dating is still under review; the piece is currently undergoing high-resolution stratigraphic scanning and isotope analysis by a joint team of preservation scientists and chronometry specialists to narrow its origin down to the exact year—and possibly even the month—of creation. Estimated Completion Date for Analysis: September 3, 2026.",
    pres: "Partial; one ear worn down to its stitching; seam loss along the right flank revealing moss stuffing; pigments faint but still discernible in low light.",
    loc: "Cabin 1 attic, hidden in a floorboard cavity 4 cm below a plank gap, as though deliberately tucked away for safekeeping.",
    use: "Child’s toy — likely cherished in both play and quiet comfort.",
    purpose: "To represent the family’s Wirehaired Pointing Griffon, serving as a stand-in during hunts or long working days when the real companion was absent.",
    evidence: "Worn muzzle where countless fingers have rubbed; faded pigment on the flanks where it may have been hugged tightly; a faint scent of old smoke embedded in the hide from years near a hearth.",
    manu: "Hand-cut deerskin with uneven edges; sinew thread still intact in places; pigments applied in short strokes to suggest wiry fur texture.",
    foundwith: "Two smooth game stones, a splintered clay bead, a woven grass cord fragment, and graphite doodles of what might be a stick figure walking a dog.",
    context: "Dry, dust-sealed cavity with minimal insect activity; insulated from temperature swings by surrounding timbers.",
    symbol: "Embodied the spirit of the family’s hunting partner — both a talisman for success and a comfort object for children awaiting safe returns.",
    comp: "Parallels found in other pre-contact and early settler-era zoomorphic toys, though the Griffon-specific detailing is rare, suggesting a personal rather than commercial origin."
  },
  {
    image: "../images/collections/huckleberrydyedwoolensockofjoy.png",
    alt: "Black-and-white field photo of a single wool sock with frayed toe on a cloth-covered table.",
    name: "Huckleberry-Dyed Woolen Sock of Joy",
    material: "Hand-spun wool dyed with crushed huckleberry skins and rainwater, reinforced at toe and heel with nettle-fiber thread.",
    size: "Length 28 cm; width at ball 9 cm; ~110 g; tubular, foot-shaped with rounded toe.",
    age: "Precise dating is still under review; the piece is currently undergoing high-resolution stratigraphic scanning and isotope analysis by a joint team of preservation scientists and chronometry specialists to narrow its origin down to the exact year—and possibly even the month—of creation. Estimated Completion Date for Analysis: February 11, 2027.",
    pres: "Partial; heel intact, toe frayed with several large pulls; faint scent traces still detectable under controlled lab conditions.",
    loc: "Hearthside debris layer, Cabin Site 2, 12–18 cm depth.",
    use: "Clothing for human foot.",
    purpose: "Everyday wear, possibly winter warmth; later repurposed as canine play/trophy.",
    evidence: "Distorted cuff from repeated tugging; puncture holes consistent with dog teeth; faint muddy paw prints along instep.",
    manu: "Even-gauge hand knitting; huckleberry dye unevenness suggests a small-batch, natural process, with darker streaks where berry juice soaked deeper into the wool.",
    foundwith: "Splintered stick, small river stone, broken clay cup handle.",
    context: "Domestic floor collapse; charred timbers overhead; cool, low-light preservation conditions.",
    symbol: "Possibly none to human owner; to the dog, the sock’s familiar scent, softness, and shape may have been irresistible—a portable joy he could carry in his mouth, much like hunting dogs do when proudly retrieving their prize.",
    comp: "Similar in gauge and fiber to other early-settler socks found at frontier homesteads, though unique for clear evidence of canine interaction."
  }
];

const ANTH_DATA = [
  {
    image: "../images/collections/clusterofwirehairedpointinggriffonpuppypteeth.png",
    alt: "Black-and-white field photo of a small scatter of shed puppy teeth on cloth.",
    name: "Cluster of Wirehaired Pointing Griffon Puppy Teeth",
    material: "Naturally shed deciduous canine and incisor teeth, calcium-rich enamel with faint root remnants; embedded in fine loam with traces of spruce needles.",
    size: "Average tooth length 0.9–1.4 cm; cluster spread ~6.2 cm; total weight ~3.4 g; irregular scatter pattern.",
    age: "Precise dating is still under review; the specimen is undergoing micro-layer sediment analysis and trace-element testing in collaboration with veterinary osteologists and paleo-dentists to determine not only the year—but potentially the exact month—these teeth were shed. Estimated Completion Date for Analysis: November 8, 2026.",
    pres: "Exceptional; enamel glossy with minimal micro-pitting; fine soil fill in root hollows; no evidence of post-depositional damage.",
    loc: "Edge of a sunken kennel foundation, Site K-3, 8–12 cm depth, within compacted bedding soil.",
    use: "Biological remains from natural tooth replacement during puppy development.",
    purpose: "Unintentional deposition; likely lost during play, chewing, or mouthing behavior typical of 3–6 month old pups.",
    evidence: "Microscopic wear striations suggest chewing on fibrous plant material and small bones; two teeth show faint crescent indentations, possibly from littermate mouthing.",
    manu: "None applicable; naturally formed biological specimens.",
    foundwith: "Small clump of matted undercoat fur, fragment of woven reed mat, short stick worn smooth at both ends from repeated mouthing.",
    context: "Low-moisture, sheltered soil beneath former kennel bedding; protected from freeze-thaw cycles, aiding preservation.",
    symbol: "To human caretakers, perhaps unnoticed at the time; to the young dog, each shed tooth marked a step toward adulthood and the promise of full hunting days ahead.",
    comp: "Comparable to modern canine deciduous tooth finds, though rarely preserved as an intact cluster in situ, making this example notable for both completeness and context."
  },
  {
    image: "../images/collections/femurcanisfamiliaris.png",
    alt: "Black-and-white field photo of a single canine femur on a cloth-covered table.",
    name: "Femur, Canis familiaris",
    material: "Cortical bone.",
    size: "19.0 cm length; ~110 g; slight anteroposterior curvature.",
    age: "Precise dating is still under review; the piece is currently undergoing high-resolution stratigraphic scanning and isotope analysis by a joint team of preservation scientists and chronometry specialists to narrow its origin down to the exact year—and possibly even the month—of creation. Estimated Completion Date for Analysis: November 14, 2029.",
    pres: "Complete; minor surface weathering; no burning.",
    loc: "Riverbank erosion face, Site E-3, nestled in a shallow alcove of silt and root, just below what clan records describe as “the last bend where Royce waited.”",
    use: "Anatomical remains; no evidence of modification for tool use.",
    purpose: "Natural skeletal element within a redeposited fluvial layer—yet its resting place, shielded by overhanging alder roots and facing downstream toward the Double Lakes, suggests it may have been placed deliberately.",
    evidence: "Small gnaw marks on the distal epiphysis; faint root etching along midshaft, as if the forest had begun to reclaim it.",
    manu: "Not applicable—unless you count decades of squirrel chasing, river splashing, and heroic retrieves as part of the bone’s “crafting process.” In that case, consider this femur a masterpiece of canine engineering.",
    foundwith: "Smooth river stone bearing a single shallow groove; a length of plaited leather cord frayed as if once tied to something cherished; and a bronze bead of the type found in Royce-era collar fittings.",
    context: "Mixed fluvial/colluvial horizon over compact sand; artifact clustering and orientation hint at intentional deposition rather than random erosion.",
    symbol: "While definitive proof remains elusive, whispers among the Double Lakes Clan say this could be a remnant of Royce himself—returned to the river that bore his reflection during countless hunts. To the uninitiated, it is simply a well-preserved canine femur; to those who know his story, it is the silent echo of a legend.",
    comp: "Morphometrics match femora of 25–30 kg Wirehaired Pointing Griffons preserved in regional collections, including the confirmed remains of Royce’s direct descendants."
  },
  {
    image: "../images/collections/partialhumanhand.png",
    alt: "Black-and-white field photo of reconstructed partial human hand bones and distal radius on cloth.",
    name: "Partial Human Hand and Distal Radius with Canine-Interaction Wear",
    material: "Human skeletal elements — partial metacarpals, proximal phalanges, and distal radius; cortical bone with preserved microstructure; trace mineral staining from surrounding soil.",
    size: "Assembled length from wrist to fingertip ~21 cm; combined weight ~142 g; articulated curve suggests habitual cupped-hand posture.",
    age: "Precise dating is still under review; currently undergoing combined osteometric analysis and uranium-thorium dating in collaboration with forensic anthropologists and taphonomy specialists to establish an exact year—and possibly month—of burial. Estimated Completion Date for Analysis: June 14, 2027.",
    pres: "Partial but well-preserved; no major fragmentation; fine cracking along phalangeal shafts; faint soil concretions on articular surfaces.",
    loc: "Beneath the east threshold stone of Cabin Site 7, 44–52 cm depth, in compact silty clay.",
    use: "Anatomical remains; physical evidence of habitual repetitive motion.",
    purpose: "Not a functional object but biological remains; micro-wear patterns suggest frequent, consistent motion aligned with repetitive stroking or patting at low elevation—consistent with canine interaction.",
    evidence: "Microscopic polish along radial side of metacarpals; minute osteoarthritic lipping on distal radius; compression and remodeling of tendon attachment points in ways consistent with decades of repetitive flexion-extension.",
    manu: "Naturally formed human bone; “manufacture” here interpreted as the biological shaping by decades of daily use.",
    foundwith: "Fragment of wool garment cuff, small bronze button, sliver of leather with buckle remnant.",
    context: "Protected under threshold stone; stable temperature and humidity; minimal rodent disturbance.",
    symbol: "An enduring physical record of bond between human and canine—a lifetime of strokes, scratches, and pats etched into bone.",
    comp: "While occupational stress markers are well-documented in archaeological skeletal remains (weavers’ knees, archers’ shoulders), this example appears unique in its patterning, suggesting a long-term, affectionate interaction with dogs rather than a labor-related motion."
  }
];

// indexes
let archIndex = 0;
let anthIndex = 0;

// render helpers
function renderItem(section, item) {
  const prefix = section === 'archaeology' ? 'arch' : 'anth';

  document.getElementById(`${prefix}-image`).src = item.image;
  document.getElementById(`${prefix}-image`).alt = item.alt;

  document.getElementById(`${prefix}-name`).textContent = item.name;
  document.getElementById(`${prefix}-material`).textContent = item.material;
  document.getElementById(`${prefix}-size`).textContent = item.size;
  document.getElementById(`${prefix}-age`).textContent = item.age;
  document.getElementById(`${prefix}-pres`).textContent = item.pres;
  document.getElementById(`${prefix}-loc`).textContent = item.loc;
  document.getElementById(`${prefix}-use`).textContent = item.use;
  document.getElementById(`${prefix}-purpose`).textContent = item.purpose;
  document.getElementById(`${prefix}-evidence`).textContent = item.evidence;
  document.getElementById(`${prefix}-manu`).textContent = item.manu;
  document.getElementById(`${prefix}-foundwith`).textContent = item.foundwith;
  document.getElementById(`${prefix}-context`).textContent = item.context;
  document.getElementById(`${prefix}-symbol`).textContent = item.symbol;
  document.getElementById(`${prefix}-comp`).textContent = item.comp;
}

// init both sections
function initCollections() {
  renderItem('archaeology', ARCH_DATA[archIndex]);
  renderItem('anthropology', ANTH_DATA[anthIndex]);
}

// arrows
function nextItem(section) {
  if (section === 'archaeology') {
    archIndex = (archIndex + 1) % ARCH_DATA.length;
    renderItem('archaeology', ARCH_DATA[archIndex]);
  } else {
    anthIndex = (anthIndex + 1) % ANTH_DATA.length;
    renderItem('anthropology', ANTH_DATA[anthIndex]);
  }
}

function prevItem(section) {
  if (section === 'archaeology') {
    archIndex = (archIndex - 1 + ARCH_DATA.length) % ARCH_DATA.length;
    renderItem('archaeology', ARCH_DATA[archIndex]);
  } else {
    anthIndex = (anthIndex - 1 + ANTH_DATA.length) % ANTH_DATA.length;
    renderItem('anthropology', ANTH_DATA[anthIndex]);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initCollections();
});
// ===== Shared Cart Storage (teacher pattern) =====
const CART_KEY = 'museumCartV1';
const MEMBER_KEY = 'museumMemberV1'; // remember checkbox state on cart page

function readCart() {
  try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
  catch { return []; }
}
function writeCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

// ===== Shop page: addToCart(this) delegate =====
window.addToCartFromShop = function(btn){
  const id        = btn.dataset.id;
  const name      = btn.dataset.name;
  const unitPrice = Number(btn.dataset.price);
  const image     = btn.dataset.image;

  let cart = readCart();
  const idx = cart.findIndex(it => it.id === id);
  if (idx >= 0) {
    cart[idx].qty += 1;
  } else {
    cart.push({ id, name, unitPrice, qty: 1, image });
  }
  writeCart(cart);

  // Update the item card's qty badge
  const card = btn.closest('.souvenir-item');
  if (card) {
    const badge = card.querySelector('.qty-badge');
    if (badge) {
      const item = cart.find(it => it.id === id);
      badge.textContent = item ? `Qty: ${item.qty}` : '';
    }
  }
};

// Hydrate all qty badges on load
document.addEventListener('DOMContentLoaded', ()=>{
  const cart = readCart();
  document.querySelectorAll('.souvenir-item').forEach(card=>{
    const id = card.getAttribute('data-id');
    const badge = card.querySelector('.qty-badge');
    if (!badge) return;
    const it = cart.find(x => x.id === id);
    badge.textContent = it ? `Qty: ${it.qty}` : '';
  });
});

