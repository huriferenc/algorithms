class Mentes
{
  int game_save = 0;

public:
  void complete_level(int index)
  {
    game_save = game_save | (1 << index);
  }
  bool is_completed(int index)
  {
    return (game_save & (1 << index)) != 0;
  }
  void reset()
  {
    game_save = 0;
  }
};