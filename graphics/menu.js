introScreen(); // initialization();

do {
  switch (key) {
    case 1:
      command1();
      break;
    case 2:
      command2();
      break;
    case 'I':
      info();
      break;

    default:
      break;
  }
} while (key !== 'q'); // Quit
