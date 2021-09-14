describe('Calculate parking times', () => {
    it('should open the main url and verify the title', async ()  => {
        await browser.url('https://www.shino.de/parkcalc/');
        await expect(browser).toHaveTitle(
            'Parking Cost Calculator'
        );
    });

    it('should update entry date to 09/13/21', async () => {       
        const searchInput = await $('#StartingDate');
        await searchInput.setValue('09/13/2021');
    });

    it('change the entry time to 11:00AM and hit enter', async () => {       
        const searchtimeInput = await $('#StartingTime');
        await searchtimeInput.setValue('11:00');

        const enterKey = browser.keys("\uE007"); 
    });

});