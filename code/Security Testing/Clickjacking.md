# Clickjacking Vulnerability  

**Description**: Clickjacking is an attack that tricks a user into clicking a webpage element which is invisible or disguised as another element. This can cause users to unwittingly download malware, visit malicious web pages, provide credentials or sensitive information, transfer money, or purchase products online.  

**Impact**: The whole website is allowed to be embedded into a frame, so a user could be redirected to a disguised login section where the user will enter login credentials, causing the username and password to be directed to another destination.  

**Evidence**: In order to reproduce the issue, save the text below into an HTML file. If your website is displayed by opening the .html file, it means that your website can be embedded within an iframe and is vulnerable to Clickjacking. As a result, you will see your website embedded in a frame.

```html  
<html>  
   <head>  
      <title>Clickjack test page</title>  
   </head>  
   <body>  
      <p>Website is Vulnerable to ClickJacking!</p>  
      <div style="z-index:10; opacity:0.5; position:absolute; top:0px;">  
         <iframe src="Here put your website url" width="800" height="800"></iframe>  
      </div>  
   </body>  
</html>

**Remediation**: To mitigate these vulnerabilities, it is essential to set HTTP security headers correctly and implement protection against ClickJacking.

**How to test?**:
- From CMD put "curl -I https://example.com" to verify the headers are set correctly
- ClickJacking Protection: Try embedding your website in an iframe on a different origin and make sure it's not displayed.