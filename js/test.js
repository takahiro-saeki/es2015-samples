export default function() {
  $('#aaa').on('click', () => {
    let flags = $('#bbb').find('.gaze');
    if(!flags) {
      $('#bbb').append('<p class="gaze">追加要素</p>');
    }
  })
}
