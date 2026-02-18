$(function() {
  /* NOTE: hard-refresh the browser once you've updated this */
  $(".typed").typed({
    strings: [
      "stat sahildua<br/>" +
      "><span class='caret'>$</span> Job: " + description + "<br/> ^100" +
      "><span class='caret'>$</span> Skills: Large Language Models (LLMs), Information Retrieval, Representation Learning, Pre-training,Post-training, Distillation, Quantization, Compute-efficient Multimodal AI, Retrieval-Augmented Generation (RAG)<br/> ^100" +
      // "><span class='caret'>$</span> Hobbies: Cricket, Chess<br/> ^300" +
      "><span class='caret'>$</span> Tech Talks: <a href='https://youtube.com/playlist?list=PLfBW8mpprU875sDGuai0uCekLk8oL9xfe&si=2S3PWuoKZgWhkQFb' target='_blank'>YouTube Playlist</a><br/> ^300"
    ],
    showCursor: true,
    cursorChar: '_',
    autoInsertCss: true,
    typeSpeed: 0.001,
    startDelay: 50,
    loop: false,
    showCursor: false,
    onStart: $('.message form').hide(),
    onStop: $('.message form').show(),
    onTypingResumed: $('.message form').hide(),
    onTypingPaused: $('.message form').show(),
    onComplete: $('.message form').show(),
    onStringTyped: function(pos, self) {$('.message form').show();},
  });
  $('.message form').hide()
});
