const { Builder, By, Key, until } = require('selenium-webdriver');

(async function loginAndNavigate() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get('http://192.168.1.1');

        await driver.findElement(By.id('Frm_Username')).sendKeys('multipro');
        await driver.findElement(By.id('Frm_Password')).sendKeys('$ebrateL2021', Key.RETURN);

        try {
            await driver.wait(until.titleIs('Página inicial'), 5000);
        } catch (error) {
            await driver.findElement(By.id('Frm_Username')).sendKeys('multipro');
            await driver.findElement(By.id('Frm_Password')).clear();
            await driver.findElement(By.id('Frm_Password')).sendKeys('multipro', Key.RETURN);
            await driver.wait(until.titleIs('Página inicial'), 5000);
        }

       
        // Localize e clique no elemento 'Administration'
        let adminElement = await driver.wait(until.elementLocated(By.id('Fnt_mmManager')));
        await adminElement.click(Admistration);

        // Aguarde até que a página de administração seja carregada para continuar com as ações...
        await driver.wait(until.titleIs('Página inicial'), 5000);

        // Localize e clique no elemento 'System Management'
        let systemManagementElement = await driver.wait(until.elementLocated(By.id('smSysMgr')));
        await systemManagementElement.click();

        // Aguarde até que a página de System Management seja carregada para continuar com as ações...
        await driver.wait(until.titleIs('Página inicial'), 5000);

        // Localize e clique no elemento 'Default Configuration Management'
        let defConfigElement = await driver.wait(until.elementLocated(By.id('ssmDefCfgMgr')));
        await defConfigElement.click();

        // Aguarde até que a página de Default Configuration Management seja carregada para continuar com as ações...
        await driver.wait(until.titleIs('Página inicial'), 5000);

        // Localize e interaja com o elemento 'Upload' do tipo arquivo
        let fileInputElement = await driver.wait(until.elementLocated(By.id('DefCfgUpload')));
        // Aqui você pode enviar um arquivo para o elemento de upload, se necessário
        // fileInputElement.sendKeys('caminho/do/arquivo.txt');

        // Aguarde até que as ações sejam concluídas ou a página seja carregada
        // Adicione mais espera ou ações conforme necessário

    } catch (error) {
        console.error('Ocorreu um erro:', error);
    } finally {
        // Remova a linha abaixo se desejar manter o navegador aberto após a execução do script
        
    }
})();
