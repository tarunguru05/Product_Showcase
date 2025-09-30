// Handle remove button
document.querySelectorAll('.remove-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    this.closest('.cart-item').remove();
    alert("Item removed from cart!");
  });
});

// Handle quantity change
document.querySelectorAll('.qty-input').forEach(input => {
  input.addEventListener('change', function() {
    if (this.value < 1) this.value = 1;
    // Here you can also update subtotal/total dynamically
  });
});
