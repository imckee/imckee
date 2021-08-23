package com.profootballreference;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import java.util.HashMap;
import java.util.Map;

public class SuperBowlScore {

    private WebDriver driver;
    private Map<String, Object> vars;
    JavascriptExecutor js;
    @Before
    public void setUp() {
        driver = new ChromeDriver();
        js = (JavascriptExecutor) driver;
        vars = new HashMap<String, Object>();
    }
    @After
    public void tearDown() {
        driver.quit();
    }
    @Test
    public void untitled() {
        driver.get("https://www.pro-football-reference.com/");
        driver.manage().window().setSize(new Dimension(1394, 813));
        driver.findElement(By.name("search")).click();
        driver.findElement(By.name("search")).sendKeys("super bowl");
        driver.findElement(By.cssSelector(".ac-suggestion:nth-child(1) > div")).click();
        js.executeScript("window.scrollTo(0,123)");
        {
            WebElement element = driver.findElement(By.linkText("Mercedes-Benz Superdome"));
            Actions builder = new Actions(driver);
            builder.moveToElement(element).perform();
        }
    }

}
