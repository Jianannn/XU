package view;

import javafx.geometry.Pos;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.image.Image;
import javafx.scene.layout.*;
import util.Util;

import java.io.File;
import java.net.MalformedURLException;

class IndexView extends VBox {
    private Button btnChooseRoom;
    private Button btnFind;
    private Button btnModifyPassword;
    private Button btnExit;

    IndexView()  {
        // 添加控件
        this.setSpacing(40);
        this.setAlignment(Pos.CENTER);
        btnChooseRoom = new Button("入住/退房");
        btnFind = new Button("    查询    ");
        btnModifyPassword = new Button(" 修改密码 ");
        btnExit = new Button("    退出    ");
        this.getChildren().addAll(btnChooseRoom, btnFind, btnModifyPassword, btnExit);

        // 按钮单击事件
        btnChooseRoom.setOnAction(event -> {
            try {
                Util.stage.setScene(new Scene(new ChooseRoomView(), 580, 300));
            } catch (Exception e) {
                e.printStackTrace();
            }
        });
        btnFind.setOnAction(event -> {
            try {
                Util.stage.setScene(new Scene(new FindView(), 500, 400));
            } catch (Exception e) {
                e.printStackTrace();
            }
        });
        btnModifyPassword.setOnAction(event -> {
            try {
                Util.stage.setScene(new Scene(new ChangePasswordView(), 300, 200));
            } catch (Exception e) {
                e.printStackTrace();
            }
        });
        btnExit.setOnAction(event -> {
            System.exit(0);
        });


        try {
            File image = new File("resource/background.jpg");
            Image backgroundImage = new Image(image.toURI().toURL().toExternalForm());
            this.setBackground(new Background(new BackgroundImage(backgroundImage, BackgroundRepeat.NO_REPEAT, BackgroundRepeat.NO_REPEAT, BackgroundPosition.CENTER, BackgroundSize.DEFAULT)));
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }

    }
}