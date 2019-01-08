package information;

public class Room {
    private String id;// 房号
    private String[] beds;// 存放每张床的信息，若有人住则为学生的学号和姓名，否则为空
    private int available;// 表示剩余多少张床

    public Room(String id, String[] beds) {
        this.id = id;
        this.beds = beds;
        this.available = 0;
        for (String bed : beds) if (bed.equals("空")) available++;
    }


    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String[] getBeds() {
        return beds;
    }

    public void setBeds(String[] beds) {
        this.beds = beds;
    }

    public boolean isFull() {
        return available == 0;
    }

    public boolean isEmpty() {
        return available == 4;
    }


    // 下面两个方法是每次有学生入住时或学生退房时，被student对象调用的方法
    void checkIn(Student student, int bedIndex) {
        beds[bedIndex - 1] = student.getId() + "，" + student.getName();
        available--;
    }
    void checkOut(Student student, int bedIndex) {
        beds[bedIndex - 1] = "空";
        available++;
    }
}
