// Category Filtering
const filterButtons = document.querySelectorAll('.category-menu button');
const products = document.querySelectorAll('.product');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const category = btn.dataset.category;

    products.forEach(product => {
      if(category === 'all' || product.dataset.category === category) {
        product.style.display = 'block';
      } else {
        product.style.display = 'none';
      }
    });
  });
});

// Add to Cart Alert
const addCartButtons = document.querySelectorAll('.add-cart-btn');
addCartButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    alert('Product added to cart!');
  });
});

// Quick View Modal
const quickViewButtons = document.querySelectorAll('.quick-view-btn');
const modal = new bootstrap.Modal(document.getElementById('quickViewModal'));
const modalTitle = document.getElementById('modalTitle');
const modalMainImg = document.getElementById('modalMainImg');
const modalThumbnails = document.getElementById('modalThumbnails');
const modalPrice = document.getElementById('modalPrice');
const modalOriginalPrice = document.getElementById('modalOriginalPrice');
const modalRating = document.getElementById('modalRating');
const modalDescription = document.getElementById('modalDescription');
const modalSpecs = document.getElementById('modalSpecs');
const modalReviews = document.getElementById('modalReviews');

quickViewButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Basic info
    modalTitle.textContent = btn.dataset.title;
    modalPrice.textContent = btn.dataset.price;
    modalOriginalPrice.textContent = btn.dataset.originalPrice;
    modalRating.textContent = btn.dataset.rating;
    modalDescription.textContent = btn.dataset.description || "No description available.";

    // Specifications
    modalSpecs.innerHTML = "";
    if (btn.dataset.specs) {
      btn.dataset.specs.split(',').forEach(spec => {
        const li = document.createElement('li');
        li.textContent = spec.trim();
        modalSpecs.appendChild(li);
      });
    }

    // Reviews
    modalReviews.innerHTML = "";
    if (btn.dataset.reviews) {
      btn.dataset.reviews.split('|').forEach(review => {
        const li = document.createElement('li');
        li.textContent = review.trim();
        modalReviews.appendChild(li);
      });
    }

    // Multiple images
    const images = btn.dataset.images.split(','); 
    modalMainImg.src = images[0];

    modalThumbnails.innerHTML = '';
    images.forEach(src => {
      const thumb = document.createElement('img');
      thumb.src = src;
      thumb.classList.add('img-thumbnail');
      thumb.style.width = '60px';
      thumb.style.height = '60px';
      thumb.style.cursor = 'pointer';
      thumb.addEventListener('click', () => modalMainImg.src = src);
      modalThumbnails.appendChild(thumb);
    });

    modal.show();
  });
});

