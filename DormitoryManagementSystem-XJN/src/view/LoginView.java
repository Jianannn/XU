package view;

import javafx.geometry.Insets;
import javafx.geometry.Pos;
import javafx.scene.Scene;
import javafx.scene.control.*;
import javafx.scene.image.Image;
import javafx.scene.layout.*;
import util.Util;

import java.io.*;
import java.net.MalformedURLException;


class LoginView extends GridPane {
    private Label lblName;
    private Label lblPassword;
    private TextField txtName;
    private TextField txtPassword;
    private HBox hBox;
    private Button btnLogin;
    private Button btnExit;

    LoginView() {
        // 添加控件
        this.setAlignment(Pos.CENTER);
        this.setPadding(new Insets(20));
        this.setHgap(30);
        this.setVgap(30);
        lblName = new Label("账号：");
        lblPassword = new Label("密码：");
        txtName = new TextField();
        txtPassword = new TextField();
        hBox = new HBox();
        hBox.setAlignment(Pos.CENTER);
        hBox.setSpacing(20);
        btnLogin = new Button("登录");
        btnExit = new Button("退出");

        hBox.getChildren().addAll(btnLogin, btnExit);
        this.add(lblName, 0, 0);
        this.add(txtName, 1, 0);
        this.add(lblPassword, 0, 1);
        this.add(txtPassword, 1, 1);
        this.add(hBox, 1, 2);

        // 按钮单击事件
        btnLogin.setOnAction(event -> {
            String name = getName();
            String password = getPassword();
            try {
                BufferedReader br = new BufferedReader(new FileReader("resource/admin.txt"));
                String[] info = br.readLine().split(" ");
                if (!name.equals(info[0])) {
                    Alert alert = new Alert(Alert.AlertType.ERROR, "账号输入错误");
                    alert.showAndWait();
                } else if (!info[1].equals(password)) {
                    Alert alert = new Alert(Alert.AlertType.ERROR, "密码输入错误");
                    alert.showAndWait();
                } else {
                    Util.students = Util.getAllStudents();
                    Util.rooms = Util.getAllRooms();
                    Util.stage.setScene(new Scene(new IndexView(), 300, 400));
                }
            } catch (IOException e) {
                e.printStackTrace();
            } catch (NullPointerException e) {
                Alert alert = new Alert(Alert.AlertType.ERROR, "用户名或密码错误");
                alert.showAndWait();
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


    private String getName() {
        return txtName.getText();
    }

    private String getPassword() {
        return txtPassword.getText();
    }


}
