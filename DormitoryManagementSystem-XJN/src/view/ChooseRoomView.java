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
import javafx.scene.paint.Color;
import information.Room;
import util.Util;

import java.io.File;
import java.net.MalformedURLException;


class ChooseRoomView extends BorderPane {
    private Label[] lblRooms;
    private Label lbl1;
    private Label lbl2;
    private Label lblTip;
    private TextField txtInput;
    private Button btnCheckIn;
    private Button btnCheckOut;
    private Button btnBack;

    ChooseRoomView() {
        // 添加控件
        lblRooms = new Label[30];
        HBox[] hBoxes = new HBox[3];
        VBox vBox = new VBox();
        vBox.setSpacing(10);
        vBox.setAlignment(Pos.CENTER);
        for (int i = 0; i < 3; i++){
            hBoxes[i] = new HBox();
            hBoxes[i].setSpacing(10);
            hBoxes[i].setAlignment(Pos.CENTER);
            vBox.getChildren().add(hBoxes[i]);
        }
        hBoxes[0].setSpacing(12);// 特殊处理下

        for (int i = 0; i < lblRooms.length; i++) {
            Room room = Util.rooms.get(i);
            lblRooms[i] = new Label(room.getId());
            if(room.isFull()) {
                lblRooms[i].setBackground(new Background(new BackgroundFill(Color.RED,null,null)));
                lblRooms[i].setDisable(true);
            }
            else lblRooms[i].setBackground(new Background(new BackgroundFill(Color.GREEN,null,null)));
            // 每10个lbl存放到一个hBox里
            hBoxes[i / 10].getChildren().add(lblRooms[i]);
        }

        lbl1 = new Label("已满");
        lbl1.setBackground(new Background(new BackgroundFill(Color.RED,null,null)));
        lbl2 = new Label("未满");
        lbl2.setBackground(new Background(new BackgroundFill(Color.GREEN,null,null)));
        lblTip = new Label("选中的寝室是：");
        txtInput = new TextField();
        btnCheckIn = new Button("办理入住");
        btnCheckOut = new Button("办理退房");
        btnBack = new Button("返回上级");
        HBox hBox1 = new HBox();
        hBox1.setAlignment(Pos.CENTER);
        hBox1.setSpacing(20);
        hBox1.getChildren().addAll(lbl1, lbl2);
        vBox.getChildren().add(hBox1);
        HBox hBox2 = new HBox();
        hBox2.setAlignment(Pos.CENTER);
        hBox2.setSpacing(10);
        hBox2.getChildren().addAll(lblTip, txtInput, btnCheckIn, btnCheckOut,btnBack);
        this.setCenter(vBox);
        this.setBottom(hBox2);
        this.setPadding(new Insets(30,30,30,30));

        // 按钮单击事件
        btnCheckIn.setOnAction(event -> {
            String input = txtInput.getText();
            Room room = Util.getRoom(input);
            if (room == null) {
                Alert alert = new Alert(Alert.AlertType.ERROR, "您输入的房号有误");
                alert.showAndWait();
            } else if (room.isFull()) {
                Alert alert = new Alert(Alert.AlertType.ERROR, "您选的房间已满");
                alert.showAndWait();
            }else {
                try {
                    Util.stage.setScene(new Scene(new CheckInView(room), 400, 370));
                    Util.stage.setTitle("入住登记");
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
        });
        btnCheckOut.setOnAction(event -> {
            String input = txtInput.getText();
            Room room = Util.getRoom(input);
            if (room == null) {
                Alert alert = new Alert(Alert.AlertType.ERROR, "您输入的房号有误");
                alert.showAndWait();
            } else if (room.isEmpty()) {
                Alert alert = new Alert(Alert.AlertType.ERROR, "您选的房间为空");
                alert.showAndWait();
            }else {
                try {
                    Util.stage.setScene(new Scene(new CheckOutView(room), 300, 200));
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
        });
        btnBack.setOnAction(event -> {
            Util.stage.setScene(new Scene(new IndexView(), 300, 400));
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
