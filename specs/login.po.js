class LoginPage {
    constructor() {
        this.inputEmail = element(by.id('MainContent_txt_usu_email'));
        this.inputSenha = element(by.id('MainContent_txt_sen_descricao'));
        this.buttonLogin = element(by.id('MainContent_BtnEntrar'));
        this.alertError = element(by.id('MainContent_lbl_Msg'));
        this.alertBlank = element(by.css('.ajax__validatorcallout_error_message_cell'))
        this.name = element(by.xpath('//*[@id="ctl01"]/div[4]/p/b[1]'));
    }

    loginSucess(user, password) {
        this.inputEmail.clear().sendKeys(user);
        this.inputSenha.clear().sendKeys(password);       
        this.buttonLogin.click(); 
    }
}

module.exports = LoginPage;