document.addEventListener("DOMContentLoaded", function () {
  
  // Handle task detail modal open and close
  document.querySelectorAll(".view-task-btn").forEach(button => {
    button.addEventListener("click", function () {
      document.getElementById("taskDetailModal").style.display = "block";
    });
  });
  
  document.querySelector(".close").addEventListener("click", function () {
    document.getElementById("taskDetailModal").style.display = "none";
  });
  
  // Reassign task
  document.getElementById("reassignButton").addEventListener("click", function () {
    const selectedAssignee = document.getElementById("assignedTo").value;
    alert(`Task reassigned to: ${selectedAssignee}`);
    // Logic to save reassignment goes here
    document.getElementById("taskDetailModal").style.display = "none";
  });

  // Send reminder
  document.getElementById("sendReminderButton").addEventListener("click", function () {
    const assignee = document.getElementById("assignedTo").value;
    alert(`Reminder sent to: ${assignee}`);
    // Logic to send reminder (e.g., email) goes here
  });

  // Export tasks to CSV
  document.getElementById("exportButton").addEventListener("click", function () {
    const tasks = [
      {
        requestId: "1",
        serviceRequested: "Plumbing",
        status: "Open",
        assignedTo: "John Doe",
        startDate: "2024-11-10",
        dueDate: "2024-11-20"
      },
      {
        requestId: "2",
        serviceRequested: "Electrical",
        status: "Ongoing",
        assignedTo: "Jane Smith",
        startDate: "2024-11-12",
        dueDate: "2024-11-18"
      }
    ]; // Example data, in practice, you'd fetch this data dynamically
    
    const csvContent = generateCSV(tasks);
    downloadCSV(csvContent);
  });
  
  // Generate CSV content
  function generateCSV(data) {
    const header = ["Request ID", "Service Requested", "Status", "Assigned To", "Start Date", "Due Date"];
    const rows = data.map(task => [
      task.requestId, task.serviceRequested, task.status, task.assignedTo, task.startDate, task.dueDate
    ]);
    
    const csvRows = [header, ...rows];
    return csvRows.map(row => row.join(",")).join("\n");
  }

  // Download the generated CSV
  function downloadCSV(content) {
    const blob = new Blob([content], { type: 'text/csv' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'tasks.csv';
    link.click();
  }

});
