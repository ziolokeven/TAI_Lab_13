package com.lab13.lab13.basic.auth;

public class AuthenticationBean {

    private String message;

    public AuthenticationBean(String message) {

        this.message = message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getMessage() {
        return this.message;
    }

    public String toString() {
        return String.format("HelloWorldBean [message=%s]", message);
    }
}
