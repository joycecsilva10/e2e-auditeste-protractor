const LoginUser = require("./login.po");
const loginPage = new LoginUser();
const AllureReport = require('../helpers/take_shot.js');

const screenShot = new AllureReport();
console.log(require("./login.po"));


describe('Login', () => {
  beforeEach(() => {
    browser.waitForAngularEnabled(false)
    browser.get('/Login.aspx');
  });
  afterEach(() => {
    screenShot.takeShot();
  });
  it('Login com sucesso', () => {
    loginPage.loginSucess('veron.oliveira@auditeste.com.br', 'auditeste');

    expect(loginPage.name.getText()).toEqual('Ana Sousa');
  });

  it('senha incorreta', () => {
    loginPage.loginSucess('veron.oliveira@auditeste.com.br', 'incorreta');

    expect(loginPage.alertError.getText()).toEqual('Senha não Localizada');
  });

  it('email não cadastrado', () => {
    loginPage.loginSucess('veron@auditeste.com.br', 'auditeste');

    expect(loginPage.alertError.getText()).toEqual('E-mail não Localizado');
  });

  it('Email em branco', () => {
    loginPage.loginSucess('', 'auditeste');

    expect(loginPage.alertBlank.getText()).toEqual('Digite o E-mail');
  });

  it('Senha em branco', () => {
    loginPage.loginSucess('veron@auditeste.com.br', '');
    
    expect(loginPage.alertBlank.getText()).toEqual('Digite a Senha');
  });
});
