const sgMail =require("@sendgrid/mail")

sgMail.setApiKey(process.env.SGAPIKEY)

const msg={
    to:"temelah@itu.edu.tr",
    from:"temelah@itu.edu.tr",
    subject:"SgMail Try",
    text:"SendGrid Mail"
}

sgMail.send(msg)
