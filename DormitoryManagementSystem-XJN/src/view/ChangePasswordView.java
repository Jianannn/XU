package view;

import javafx.geometry.Insets;
import javafx.geometry.Pos;
import javafx.scene.Scene;
import javafx.scene.control.Alert;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.control.TextField;
import javafx.scene.image.Image;
import javafx.scene.layout.*;
import util.Util;

import java.io.*;
import java.net.MalformedURLException;

class ChangePasswordView extends GridPane {
    private Label lblOldPaswd;
    private Label lblNewPaswd;
    private TextField txtOldPaswd;
    private TextField txtNewPaswd;
    private Button btnBack;
    private Button btnModify;

    ChangePasswordView() {
        // 添加控件
        this.setAlignment(Pos.CENTER);
        this.setPadding(new Insets(20));
        this.setHgap(30);
        this.setVgap(30);
        lblOldPaswd = new Label("原密码：");
        lblNewPaswd = new Label("新密码：");
        txtOldPaswd = new TextField();
        txtNewPaswd = new TextField();
        btnBack = new Button("返回");
        btnModify = new Button("修改");
        this.add(lblOldPaswd, 0, 0);
        this.add(txtOldPaswd, 1, 0);
        this.add(lblNewPaswd, 0, 1);
        this.add(txtNewPaswd, 1, 1);
        this.add(btnBack, 0, 2);
        this.add(btnModify, 1, 2);

        try {
            File image = new File("resource/background.jpg");
            Image backgroundImage = new Image(image.toURI().toURL().toExternalForm());
            this.setBackground(new Background(new BackgroundImage(backgroundImage, BackgroundRepeat.NO_REPEAT, BackgroundRepeat.NO_REPEAT, BackgroundPosition.CENTER, BackgroundSize.DEFAULT)));
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }

        // 按钮事件
        btnModify.setOnAction(event -> {
            String oldPaswd = txtOldPaswd.getText();
            String newPaswd = txtNewPaswd.getText();
            changePassword(oldPaswd, newPaswd);
        });
        btnBack.setOnAction(event -> {
            Util.stage.setScene(new Scene(new IndexView(), 300, 400));
        });
    }

    // 判断旧密码和新密码来修改密码
    private void changePassword(String oldPaswd, String newPaswd) {
        if (oldPaswd.equals("")) {
            Alert alert = new Alert(Alert.AlertType.ERROR, "请输入原密码");
            alert.showAndWait();
        } else if (newPaswd.equals("")) {
            Alert alert = new Alert(Alert.AlertType.ERROR, "请输入新密码");
            alert.showAndWait();
        } else if (oldPaswd.equals(newPaswd)) {
            Alert alert = new Alert(Alert.AlertType.ERROR, "旧密码和新密码不能相同");
            alert.showAndWait();
        } else {
            try {
                BufferedReader br = new BufferedReader(new FileReader("resource/admin.txt"));
                String[] info = br.readLine().split(" ");
                if (info[1].equals(oldPaswd)) {
                    BufferedWriter bw = new BufferedWriter(new FileWriter("resource/admin.txt"));
                    bw.write("admin " + newPaswd);
                    bw.flush();
                    bw.close();
                    Alert alert = new Alert(Alert.AlertType.INFORMATION, "修改密码成功");
                    alert.showAndWait();
                } else {
                    Alert alert = new Alert(Alert.AlertType.INFORMATION, "原密码不符合，请重新输入");
                    alert.showAndWait();
                }
                br.close();

            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }


}
