package com.profootballreference;

import com.pluralsight.AuthorPages;

public class Pages {

    public static HomePage homePage() {
        HomePage homePage = new HomePage();

        return homePage;
    }

    public static SuperBowlScore superBowlScore() {
        SuperBowlScore superBowlScore = new SuperBowlScore();
        return superBowlScore;
    }

}
