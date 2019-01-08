package view;

import javafx.application.Application;
import javafx.application.Platform;
import javafx.scene.Scene;
import javafx.stage.Stage;
import util.Util;

import java.time.LocalTime;

public class Main extends Application {

    @Override
    public void start(Stage primaryStage) throws Exception {
        Util.stage = primaryStage;
        Util.stage.setScene(new Scene(new LoginView(), 400, 300));
        Util.stage.show();
        new TimeThread().start();
    }

    public static void main(String[] args) {
        launch(args);
    }

    class TimeThread extends Thread {
        @Override
        public void run() {
            while (true) {
                try {
                    Thread.sleep(1000);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
                LocalTime localTime = LocalTime.now();
                // 多线程中涉及到javafx页面的代码要单独写到下面
                Platform.runLater(new Runnable() {
                    @Override
                    public void run() {
                        Util.stage.setTitle("寝室管理系统  时间："+localTime.getHour()+":"+localTime.getMinute()+":"+localTime.getSecond());
                    }
                });
            }
        }
    }
}
