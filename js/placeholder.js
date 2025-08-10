// Show/Hide sections via sub-nav
function showSection(id) {
  document.querySelectorAll('.collection-section').forEach(sec => {
    sec.style.display = sec.id === id ? 'block' : 'none';
  });
  // Optionally scroll to top of the section for UX
  const target = document.getElementById(id);
  if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Image sets per artifact (add more filenames to enable arrow cycling)
const artifactData = {
  whistle: {
    images: ["../images/collections/handcarvedwoodendogwhistle.png"],
    index: 0
  },
  doll: {
    images: ["../images/collections/wirehairedpointinggriffondoll.png"],
    index: 0
  },
  sock: {
    images: ["../images/collections/huckleberrydyedwoolensockofjoy.png"],
    index: 0
  },
  puppyteeth: {
    images: ["../images/collections/clusterofwirehairedpointinggriffonpuppypteeth.png"],
    index: 0
  },
  femur: {
    images: ["../images/collections/femurcanisfamiliaris.png"],
    index: 0
  },
  humanhand: {
    images: ["../images/collections/partialhumanhand.png"],
    index: 0
  }
};

// Init: hide arrows for cards with only one image
function initArtifacts() {
  document.querySelectorAll('.artifact-card').forEach(card => {
    const key = card.dataset.artifact;
    const data = artifactData[key];
    const left = card.querySelector('.arrow.left');
    const right = card.querySelector('.arrow.right');
    if (!data || !data.images || data.images.length <= 1) {
      if (left) left.style.display = 'none';
      if (right) right.style.display = 'none';
    }
  });
}

// Wire up arrow clicks
function bindArrows() {
  document.querySelectorAll('.artifact-card .arrow').forEach(btn => {
    btn.addEventListener('click', e => {
      const card = e.currentTarget.closest('.artifact-card');
      const key = card.dataset.artifact;
      const img = card.querySelector('.artifact-image');
      const data = artifactData[key];
      if (!data || data.images.length <= 1) return;

      const isLeft = e.currentTarget.classList.contains('left');
      data.index = (data.index + (isLeft ? -1 : 1) + data.images.length) % data.images.length;
      img.src = data.images[data.index];
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initArtifacts();
  bindArrows();
});
