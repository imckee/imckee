-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2021-05-16 20:43:26.185

-- tables
-- Table: GUEST
CREATE TABLE GUEST (
    AMAZON_ID serial  NOT NULL,
    Payment_authorization varchar(50)  NOT NULL,
    Return_address varchar(50)  NOT NULL,
    CONSTRAINT GUEST_pk PRIMARY KEY (AMAZON_ID)
);

-- Table: ITEMS
CREATE TABLE ITEMS (
    LOCATION_ID integer  NOT NULL,
    address varchar(50)  NOT NULL,
    GPS varchar(50)  NOT NULL,
    found_timestamp timestamp  NOT NULL,
    item_type serial  NOT NULL,
    GUEST_AMAZON_ID int  NOT NULL,
    CONSTRAINT ITEMS_pk PRIMARY KEY (LOCATION_ID)
);

-- foreign keys
-- Reference: ITEMS_GUEST (table: ITEMS)
ALTER TABLE ITEMS ADD CONSTRAINT ITEMS_GUEST
    FOREIGN KEY (GUEST_AMAZON_ID)
    REFERENCES GUEST (AMAZON_ID)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- End of file.

