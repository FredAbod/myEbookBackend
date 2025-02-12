const paymentReceivedTemplate = (firstName, ebookLink) => {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Payment Received</title>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Anek+Gurmukhi:wght@400;500;600;700&display=swap" rel="stylesheet">
      <style>
          body{
              font-family: 'Anek Gurmukhi', sans-serif;
              margin: 0;
              padding: 0;
              box-sizing: border-box;
          }
          .payment-received{
              margin: 0 auto;
              width: 576px;
              font-weight: 400;
              text-align: start;
          }
          .payment-received h1{
              font-weight: 500;
              font-size: 24px;
              margin-top: 15px;
              margin-bottom: 44px;
              line-height: 32px;
              width: 512px;
          }
          .payment-received p{
              line-height: 24px;
              font-size: 20px;
              margin-bottom: 20px;
              color: #333;
          }
          .payment-received small{
              font-size: 14px;
              color: #999;
              line-height: 20px;
              margin-bottom: 18px;
          }
          .footer{
              width: 100%;
              height: 239px;
              background-image: url('https://res.cloudinary.com/dhekqilcw/image/upload/v1687596415/mgjj1n02ixqc9frk8h2x.png');
              background-size: cover;
          }
          .footer-socials{
              width: 100px;
              padding-top: 64.69px;
              margin:0 auto;
              margin-bottom: 19.74px;
              gap: 28px;
              text-align: center;
          }
          .logo{
             margin: 0 auto;
             display: block;
             margin-bottom: 10px; 
          }
          .footer p{
              font-weight: 400;
              line-height: 16px;
              font-size: 12px;
              text-align: center;
          }
          @media screen and (max-width: 640px) {
            .payment-received{
              width: 90%;
            }
            .payment-received h1{
              font-size: 18px;
              width: 100%
            }
            .payment-received p{
              font-size: 18px;
            }
            .payment-received small{
              font-size: 12px;
           }  
          }
      </style>
  </head>
  <body>
      <div>
          <div class='payment-received'>
            <h1>Payment Received Successfully</h1>
            <p>Hi ${firstName},</p>
            <p>We have successfully received your payment. Thank you for your purchase!</p>
            <p>You can download your eBook using the following link:</p>
            <p><a href="${ebookLink}" target="_blank">Download eBook</a></p>
            <p>Best regards,</p>
            <p>Savey Team</p>
            <small>If you have any questions, feel free to reach out to us at <span style='color:#2230F6'>support@getsavey.com</span></small>
          </div>
          <div class='footer'>
              <div class='footer-socials'>
            <img src="https://res.cloudinary.com/dhekqilcw/image/upload/v1688986596/twitterlogo_w6imak.png" alt="twitter">
            <img src="https://res.cloudinary.com/dhekqilcw/image/upload/v1688986679/facebooklogo_iyntcg.png" alt="facebook">
            <img src="https://res.cloudinary.com/dhekqilcw/image/upload/v1688986662/linkedin_yzexwx.png" alt="linkedin">
            </div>
             <img src='https://res.cloudinary.com/dhekqilcw/image/upload/v1688986634/saveylogo_fekkxc.png' alt="savey logo" class='logo'/>
              <p>Copyright &copy; 2023</p>
              <p>Savey gives financial security.</p>
              <p>Your journey into financial freedom and accountability is here.</p>
          </div>
      </div>
  </body>
  </html>
  `;
};

export default paymentReceivedTemplate;
