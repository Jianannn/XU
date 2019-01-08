package information;

import util.Util;

public class Student {
    private String id;// 学号
    private String name;// 姓名
    private String department;// 院系
    private String iClass;// 班级
    private String roomId;// 房间号
    private int bedIndex;// 床号

    public Student(String id, String name, String department, String iClass, String roomId, int bedIndex) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.iClass = iClass;
        this.roomId = roomId;
        this.bedIndex = bedIndex;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public String getiClass() {
        return iClass;
    }

    public void setiClass(String iClass) {
        this.iClass = iClass;
    }

    public String getRoomId() {
        return roomId;
    }

    public void setRoomId(String roomId) {
        this.roomId = roomId;
    }

    public int getBedIndex() {
        return bedIndex;
    }

    public void setBedIndex(int bedIndex) {
        this.bedIndex = bedIndex;
    }


    // 学生入住时退房时调用
    public void checkIn(Room room, int bedIndex) {
        this.bedIndex = bedIndex;
        this.roomId = room.getId();
        room.checkIn(this, bedIndex);
        Util.updateInformation();
    }
    public void checkOut(Room room, int bedIndex) {
        this.bedIndex = 0;
        this.roomId = "0";
        Util.students.remove(this);// 确认退房时删除此学生;
        room.checkOut(this, bedIndex);
        Util.updateInformation();
    }


}
