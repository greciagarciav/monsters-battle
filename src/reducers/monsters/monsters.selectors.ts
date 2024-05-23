import { RootState } from '../../app/store';

export const selectMonsters = (state: RootState) => state.monsters.monsters;

export const selectSelectedMonster = (state: RootState) =>
  state.monsters.selectedMonster;


export const selectSelectedMonsterComputer = (state: RootState) =>
state.monsters.selectedMonster
 ? state.monsters.monsters.filter(
  (monster) => monster.id !== state.monsters.selectedMonster?.id
 )[
  Math.floor(
    Math.random() * 
    state.monsters.monsters.filter(
      (monster) => monster.id !== state.monsters.selectedMonster?.id
    ).length
  )

 ] : null