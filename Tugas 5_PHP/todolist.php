<?php
    session_start();
    include 'config.php';

    if (!isset($_SESSION['user_id'])) {
        header("Location: login.php");
        exit();
    }

    // Handle post request for new tasks
    if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['new_task'])) {
        $newTask = $_POST['new_task'];
        $userId = $_SESSION['user_id'];
        $sql = "INSERT INTO tasks (user_id, task) VALUES (?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("is", $userId, $newTask);
        $stmt->execute();
    }

        // Fetch tasks
    $userId = $_SESSION['user_id'];
    $sql = "SELECT id, task, completed FROM tasks WHERE user_id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $userId);
    $stmt->execute();
    $result = $stmt->get_result();
    $tasks = $result->fetch_all(MYSQLI_ASSOC);
?>

<!DOCTYPE html>
<html>
<head>
    <title>To-Do List</title>
</head>
<body>
    <form method="post">
        <input type="text" name="new_task">
        <input type="submit" value="Tambah">
    </form>

    <?php foreach ($tasks as $task): ?>
    <div>
        <?php echo htmlspecialchars($task['task']); ?>
        <a href="mark_complete.php?id=<?php echo $task['id']; ?>">Selesai</a>
        <a href="delete_task.php?id=<?php echo $task['id']; ?>">Hapus</a>
    </div>
    <?php endforeach; ?>
</body>
</html>
