/**
 * Update locomotiveScroll instance
 * after content has been updated via Livewire
 */

// store locomotive instance after initialization
window.locomotive = new LocomotiveScroll({});
                             
// update locomotive instance after content update
Livewire.hook('message.processed', function () {
    window.locomotive.update();
});
