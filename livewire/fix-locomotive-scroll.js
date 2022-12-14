/**
 * Update locomotiveScroll instance
 * after content has been updated via Livewire
 */

// store locomotive instance after initialization
window.locomotive = new LocomotiveScroll({});
                             
// update locomotive instance after content update
Livewire.hook('message.processed', function (e) {
    
    // if message has been generated by a form, you might want
    // the user to focus to the first error
    // (insert specific selector)
    let error = e.component.el.querySelector('.uk-form-danger');
    if(error) {
      window.locoScroll.scrollTo(error, {
          offset: 0 
      });
    }
    
    // update locomotive instance
    window.locomotive.update();
});
