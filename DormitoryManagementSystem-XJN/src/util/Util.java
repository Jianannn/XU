package util;

import information.Room;
import information.Student;
import javafx.stage.Stage;

import java.io.*;
import java.util.ArrayList;
import java.util.List;

public class Util {
    public static Stage stage;// 显示当前显示页面
    public static List<Student> students;
    public static List<Room> rooms;

    // 从student.txt文件中读取所有学生信息
    public static List<Student> getAllStudents() {
        List<Student> studentList = new ArrayList<>();
        try {
            BufferedReader br = new BufferedReader(new FileReader("resource/student.txt"));
            String tmp;
            while ((tmp = br.readLine()) != null) {
                // 每个学生之间的信息按空格分隔
                // 学生与学生之间的信息分行隔开
                String[] info = tmp.split(" ");
                String id = info[0];
                String name = info[1];
                String department = info[2];
                String sClass = info[3];
                String roomId = info[4];
                int bedIndex = Integer.valueOf(info[5]);
                studentList.add(new Student(id, name, department, sClass, roomId, bedIndex));
            }
            br.close();

        } catch (IOException e) {
            e.printStackTrace();
        }
        return studentList;
    }

    // 从room.txt文件中读取所有学生信息
    public static List<Room> getAllRooms() {
        List<Room> roomList = new ArrayList<>();
        try {
            BufferedReader br = new BufferedReader(new FileReader("resource/room.txt"));
            String tmp;
            while ((tmp = br.readLine()) != null) {
                String[] info = tmp.split(" ");
                String id = info[0];
                String[] beds = new String[4];
                beds[0] = info[1];
                beds[1] = info[2];
                beds[2] = info[3];
                beds[3] = info[4];
                roomList.add(new Room(id, beds));
            }
            br.close();

        } catch (IOException e) {
            e.printStackTrace();
        }
        return roomList;
    }

    // 每次学生入住或者退房时调用，来更新student.txt和room.txt中的信息
    public static void updateInformation() {
        try {
            BufferedWriter bw1 = new BufferedWriter(new FileWriter("resource/student.txt"));
            for (Student student : students) {
                bw1.write(student.getId() + " " + student.getName() + " " + student.getDepartment() + " " +
                        student.getiClass() + " " + student.getRoomId() + " " + student.getBedIndex() + "\n");
                bw1.flush();
            }
            bw1.close();

            BufferedWriter bw2 = new BufferedWriter(new FileWriter("resource/room.txt"));
            for (Room room : rooms) {
                String bedsInfo = "";
                for (int i = 0; i < 4; i++)
                    bedsInfo += room.getBeds()[i] + " ";
                bw2.write(room.getId() + " " + bedsInfo + "\n");
                bw2.flush();
            }
            bw2.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    // 通过学号来找到学生
    public static Student getStudent(String id) {
        for (Student student : students)
            if (student.getId().equals(id))
                return student;
        return null;
    }

    // 通过房号来找到房间
    public static Room getRoom(String id) {
        for (Room room : rooms)
            if (room.getId().equals(id))
                return room;
        return null;
    }

}
