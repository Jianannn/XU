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

class CheckInView extends GridPane {
    private Label[] labels;
    private TextField[] textFields;
    private Button btnSubmit;
    private Button btnBack;
    private Label lblTip;

    private Room room;

    CheckInView(Room room) {
        this.room=room;

        // 添加控件
        String[] info = {"学号", "姓名", "院系", "班级", "床号"};
        labels = new Label[info.length];
        textFields = new TextField[info.length];
        for (int i = 0; i < labels.length; i++) {
            labels[i] = new Label(info[i]);
            textFields[i] = new TextField();
            this.add(labels[i], 0, i);
            this.add(textFields[i], 1, i);
        }
        btnSubmit = new Button("确认入住");
        btnBack = new Button("返回上级");
        HBox hBox = new HBox(btnSubmit, btnBack);
        hBox.setSpacing(30);
        this.add(hBox, 1, 6);
        // 显示提示框的信息
        setLblTip();
        this.add(lblTip, 0, 7, 2, 1);
        this.setVgap(10);
        this.setHgap(30);
        this.setAlignment(Pos.CENTER);
        this.setPadding(new Insets(20));

        try {
            File image = new File("resource/background.jpg");
            Image backgroundImage = new Image(image.toURI().toURL().toExternalForm());
            this.setBackground(new Background(new BackgroundImage(backgroundImage, BackgroundRepeat.NO_REPEAT, BackgroundRepeat.NO_REPEAT, BackgroundPosition.CENTER, BackgroundSize.DEFAULT)));
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }

        // 按钮单击事件
        btnSubmit.setOnAction(event -> {
            String id = textFields[0].getText();
            String name = textFields[1].getText();
            String department = textFields[2].getText();
            String iClass = textFields[3].getText();
            String roomId = room.getId();
            int bedIndex = Integer.valueOf(textFields[4].getText());
            if (room.getBeds()[bedIndex - 1].equals("空")) {
                Student student = new Student(id, name, department, iClass, roomId, bedIndex);
                Util.students.add(student);
                student.checkIn(room, bedIndex);
                for (TextField textField : textFields) textField.setText("");
                Alert alert = new Alert(Alert.AlertType.INFORMATION, "办理入住成功");
                alert.showAndWait();
                setLblTip();
            } else {
                Alert alert = new Alert(Alert.AlertType.ERROR, "所选择的床号不为空");
                alert.showAndWait();
            }
        });
        btnBack.setOnAction(event -> {
            Util.stage.setScene(new Scene(new ChooseRoomView(), 580, 300));
        });
    }

    // 每次入住都要更新提示框的信息
    private void setLblTip() {
        String tip = "选中的寝室是：" + room.getId() + "\n";
        for (int i = 0; i < 4; i++) {
            if (room.getBeds()[i].equals("空"))
                tip += (i + 1) + "号床：空" + "\n";
            else tip += +(i + 1) + "号床：" + room.getBeds()[i] + "\n";
        }
        lblTip = new Label(tip);
    }
}
