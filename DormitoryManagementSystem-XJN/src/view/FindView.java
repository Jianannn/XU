package view;

import information.Student;
import javafx.collections.FXCollections;
import javafx.collections.ObservableList;
import javafx.geometry.Pos;
import javafx.scene.Scene;
import javafx.scene.control.*;
import javafx.scene.image.Image;
import javafx.scene.layout.*;
import util.Util;

import java.io.File;
import java.net.MalformedURLException;
import java.util.ArrayList;
import java.util.List;

class FindView extends BorderPane {
    private ListView<String> listView;
    private ChoiceBox choiceBox;
    private TextField txtInput;
    private Button btnFind;
    private Button btnBack;

    FindView() {
        // 添加控件
        listView = new ListView<>();
        listView.setItems(null);
        choiceBox = new ChoiceBox(FXCollections.observableArrayList(
                "院系", "班级", "寝室", "学号", "姓名"
        ));
        txtInput = new TextField();
        btnFind = new Button("查找结果");
        btnBack = new Button("返回上级");
        HBox hBox = new HBox(choiceBox, txtInput, btnFind, btnBack);
        hBox.setAlignment(Pos.CENTER);
        hBox.setSpacing(10);
        this.setCenter(listView);
        this.setBottom(hBox);

        // 按钮单击事件
        btnFind.setOnAction(event -> {
            int type = choiceBox.getSelectionModel().getSelectedIndex();
            String input = txtInput.getText();
            if (type == -1) {
                Alert alert = new Alert(Alert.AlertType.ERROR, "请选择查找类型");
                alert.showAndWait();
            } else if (input.equals("")) {
                Alert alert = new Alert(Alert.AlertType.ERROR, "请输入查找内容");
                alert.showAndWait();
            } else find(input, type);
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

    // 每种查询类型用不同的查找方法
    private void find(String input, int type) {
        List<Student> students = new ArrayList<>();
        if (type == 0) {
            // 按院系
            for (Student student : Util.students)
                if (student.getDepartment().equals(input))
                    students.add(student);
        } else if (type == 1) {
            // 按班级
            for (Student student : Util.students)
                if (student.getiClass().equals(input))
                    students.add(student);
        } else if (type == 2) {
            // 按寝室
            for (Student student : Util.students)
                if (student.getRoomId().equals(input))
                    students.add(student);
        } else if (type == 3) {
            // 按学号
            for (Student student : Util.students)
                if (student.getId().equals(input))
                    students.add(student);
        } else if (type == 4) {
            // 按姓名
            for (Student student : Util.students)
                if (student.getName().equals(input))
                    students.add(student);
        }
        int size = students.size();
        String[] info;
        if (size == 0) {
            info = new String[1];
            info[0] = "查询不到信息";
        } else {
            info = new String[students.size()];
            for (int i = 0; i < size; i++) {
                info[i] = students.get(i).getId() + " " + students.get(i).getName() + " " + students.get(i).getDepartment() + " " +
                        students.get(i).getiClass() + " " + students.get(i).getRoomId() + " " + students.get(i).getBedIndex();
            }
            // 下面是将查找的结果显示到listView里
            ObservableList<String> items = FXCollections.observableArrayList(info);
            listView.setItems(items);
        }
    }
}
