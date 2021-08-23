package com.profootballreference;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.HashMap;
import java.util.Map;

public class SearchDemo {

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
    public void brady() {
        driver.get("https://www.pro-football-reference.com/super-bowl/");
        driver.manage().window().setSize(new Dimension(1394, 813));
        driver.findElement(By.name("search")).click();
        driver.findElement(By.name("search")).sendKeys("Tom Brady");
        driver.findElement(By.cssSelector(".search-results-item > strong")).click();
        js.executeScript("window.scrollTo(0,1067)");
    }
}


