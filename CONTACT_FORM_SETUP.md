# 📧 Contact Form Setup Guide

## How to Receive Messages from Your Portfolio Contact Form

Your contact form is now configured to send messages to your email using **FormSpree**. Follow these simple steps to complete the setup:

---

## 🚀 Quick Setup (5 minutes)

### Step 1: Create a FormSpree Account

1. Go to [https://formspree.io/](https://formspree.io/)
2. Click **"Sign Up"** (it's FREE!)
3. Sign up with your email or GitHub account

### Step 2: Create a New Form

1. After logging in, click **"+ New Form"**
2. Give your form a name (e.g., "Portfolio Contact Form")
3. Click **"Create Form"**

### Step 3: Get Your Form ID

1. After creating the form, you'll see your **Form Endpoint**
2. It will look like: `https://formspree.io/f/YOUR_FORM_ID`
3. Copy the **YOUR_FORM_ID** part (it looks like: `xpznvwqr` or similar)

### Step 4: Your Code is Updated! ✅

I have already updated your `src/App.jsx` with your Form ID: `mlgwnjgd`.

```javascript
// Current configuration in App.jsx:
const response = await fetch('https://formspree.io/f/mlgwnjgd', {
```

### Step 5: Test Your Form

1. Go to your portfolio website.
2. Fill out the contact form.
3. Click "Send Message".
4. You should see a success message ✓.
5. Check your email - you'll receive the message (you might need to confirm the first email from Formspree to activate the form).

---

## ✨ Features Implemented

✅ **Form Validation** - All fields are required
✅ **Success Message** - Green confirmation when message is sent
✅ **Error Handling** - Red error message if something goes wrong
✅ **Auto Reset** - Form clears after successful submission
✅ **Email Notifications** - You receive messages directly to your email
✅ **No Backend Needed** - Everything works client-side

---

## 📊 FormSpree Free Plan Includes:

- ✅ 50 submissions per month
- ✅ Email notifications
- ✅ Spam filtering
- ✅ File uploads (if needed)
- ✅ Unlimited forms

**Need more?** Upgrade to paid plan for unlimited submissions.

---

## 🎨 How It Works

1. **User fills form** → Name, Email, Project details
2. **Clicks "Send Message"** → Form submits to FormSpree
3. **FormSpree processes** → Validates and forwards to your email
4. **You receive email** → With all the form details
5. **User sees confirmation** → Success message appears

---

## 🔧 Customization Options

### Change Success Message

In `src/App.jsx`, line ~496:
```jsx
<div className="contact__form-message contact__form-message--success">
  ✓ Your custom success message here!
</div>
```

### Change Error Message

In `src/App.jsx`, line ~501:
```jsx
<div className="contact__form-message contact__form-message--error">
  ✗ Your custom error message here!
</div>
```

### Change Message Display Time

In `src/App.jsx`, lines 33, 36, 40 (currently 5000ms = 5 seconds):
```javascript
setTimeout(() => setFormStatus(''), 5000); // Change 5000 to your preferred time
```

---

## 🛡️ Security Features

- ✅ **Spam Protection** - FormSpree includes built-in spam filtering
- ✅ **Email Validation** - Form validates email format
- ✅ **Required Fields** - All fields must be filled
- ✅ **HTTPS** - Secure data transmission

---

## 📱 Mobile Friendly

The form works perfectly on:
- ✅ Mobile phones
- ✅ Tablets
- ✅ Desktop computers
- ✅ All modern browsers

---

## 🆘 Troubleshooting

### "Message not sending"
- Check your Form ID is correct
- Make sure you're connected to the internet
- Check browser console for errors (F12)

### "Not receiving emails"
- Check your spam folder
- Verify email in FormSpree dashboard
- Make sure form is activated in FormSpree

### "Error message appears"
- Check your internet connection
- Verify Form ID is correct
- Try again in a few minutes

---

## 🎯 Alternative Options

If you prefer other services:

### **EmailJS** (Alternative)
- Website: [emailjs.com](https://www.emailjs.com/)
- Free tier: 200 emails/month
- Requires more setup

### **Web3Forms** (Alternative)
- Website: [web3forms.com](https://web3forms.com/)
- Free tier: 250 submissions/month
- Very simple setup

### **Netlify Forms** (If hosting on Netlify)
- Built into Netlify hosting
- Free tier: 100 submissions/month
- Zero configuration needed

---

## 📞 Support

If you need help:
1. Check FormSpree documentation: [docs.formspree.io](https://docs.formspree.io/)
2. Contact FormSpree support: [formspree.io/support](https://formspree.io/support)

---

## ✅ Checklist

- [ ] Created FormSpree account
- [ ] Created new form in FormSpree
- [ ] Copied Form ID
- [ ] Updated `src/App.jsx` with Form ID
- [ ] Tested the form
- [ ] Received test email
- [ ] Form is working! 🎉

---

**Last Updated**: February 16, 2026
**Version**: 1.0 - Contact Form Integration
