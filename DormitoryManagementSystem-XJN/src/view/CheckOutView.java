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
import information.Room;
import information.Student;
import util.Util;

import java.io.File;
import java.net.MalformedURLException;

class CheckOutView extends GridPane {
    private Label labels;
    private TextField txtBedIndex;
    private Button btnSubmit;
    private Button btnBack;
    private Label lblTip;

    private Room room;

    CheckOutView(Room room) {
        this.room = room;

        // 添加控件
        labels = new Label("床号");
        txtBedIndex = new TextField();
        this.add(labels, 0, 0);
        this.add(txtBedIndex, 1, 0);
        btnSubmit = new Button("确认退房");
        btnBack = new Button("返回上级");
        HBox hBox = new HBox(btnSubmit, btnBack);
        hBox.setSpacing(30);
        this.add(hBox, 1, 1);
        setLblTip();
        this.add(lblTip, 0, 2, 2, 1);
        this.setVgap(10);
        this.setHgap(35);
        this.setAlignment(Pos.CENTER);
        this.setPadding(new Insets(10));

        try {
            File image = new File("resource/background.jpg");
            Image backgroundImage = new Image(image.toURI().toURL().toExternalForm());
            this.setBackground(new Background(new BackgroundImage(backgroundImage, BackgroundRepeat.NO_REPEAT, BackgroundRepeat.NO_REPEAT, BackgroundPosition.CENTER, BackgroundSize.DEFAULT)));
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }

        // 按钮单击事件
        btnSubmit.setOnAction(event -> {
            int bedIndex = Integer.valueOf(txtBedIndex.getText());
            if (!room.getBeds()[bedIndex - 1].equals("空")) {
                String[] bedInfo = room.getBeds()[bedIndex - 1].split("，");
                Student student = Util.getStudent(bedInfo[0]);
                student.checkOut(room, bedIndex);
                txtBedIndex.setText("");
                Alert alert = new Alert(Alert.AlertType.INFORMATION, "办理退房成功");
                alert.showAndWait();
            } else {
                Alert alert = new Alert(Alert.AlertType.ERROR, "选中的床为空");
                alert.showAndWait();
            }
        });

        btnBack.setOnAction(event -> {
            Util.stage.setScene(new Scene(new ChooseRoomView(), 580, 300));
        });
    }

    // 每次退房都要更新提示框的信息
    private void setLblTip() {
        String tip = "选中的寝室是：" + room.getId() + "\n";
        for (int i = 0; i < 4; i++) {
            if (room.getBeds()[i].equals("空"))
                tip += +(i + 1) + "号床：空\n";
            else tip += +(i + 1) + "号床：" + room.getBeds()[i] + "\n";
        }
        lblTip = new Label(tip);
    }

}
