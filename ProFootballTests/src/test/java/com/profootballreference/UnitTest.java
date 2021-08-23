package com.profootballreference;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

public class UnitTest {

        @Test
        public void canGoToHomePage() {
            Pages.homePage().goTo();
            Assertions.assertTrue(Pages.homePage().isAt());
        }

}
