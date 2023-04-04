$('#webhookform').on('click', function(event) {
    event.preventDefault();

    // Substitua isso pela URL do seu webhook
    const webhookURL = 'https://webhook.site/5d5d73dd-bfe5-49fa-8820-10af6548c280';

    // Serializar dados do formulário
    const formData = $('#webhookform').serialize();

    // Enviar dados para o webhook usando solicitação POST AJAX
    $.ajax({
        type: 'POST',
        url: webhookURL,
        data: formData,
        complete: function(jqXHR, textStatus) {
            // Lidar com o envio bem-sucedido e com erros
            alert('Questionário enviado.');

            // Redirecionar para https://www.google.com após enviar o questionário
            window.location.href = "https://www.dataforaliving.com/old-site";
        }
    });
});