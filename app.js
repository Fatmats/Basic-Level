var Username="Admin";
var password=122345;
var enterControl=false;

function Usernamecheck(){
    var usernamess=prompt("Kullanıcı adı:")
    return Username==usernamess
};

function Passwordcheck(){
    var pasort = prompt("Şifre Yanlış")
    return password ==pasort
};

while(!enterControl){
if (Usernamecheck() && Passwordcheck()){
    if(Passwordcheck()){
        alert("Giriş Yapıldı");
    }else{
        alert("Giriş Yapılamadı")
        break;
    }}
    else{
        if(confirm("Bir daha denemek istermisiniz?")){
            if(Usernamecheck() && Passwordcheck()){
                alert("Giriş Yapıldı!! Tebrikler")
                break; }
            else{
                alert("Malesef Giriş Yapılamadı!!")
                break
            }}
        
        else{
            break;
        }}
    }
