package com.rntesting;

import android.util.Log;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class TimerModule extends ReactContextBaseJavaModule {
    TimerModule(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return "TimerModule";
    }

    @ReactMethod
    public void getNumber(int number) {
        System.out.println("Number is println : " + number);
        Log.d("Number is log.d : ", String.valueOf(number));
    }
}
