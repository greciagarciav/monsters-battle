import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useAppDispatch } from "../../app/hooks"
import { MonsterBattleCard } from "../../components/monster-battle-card/MonsterBattleCard"
import { MonstersList } from "../../components/monsters-list/MonstersList"
import { Title } from "../../components/title/Title"
import { Winner  } from "../../models/interfaces/monster.interface"
import { fetchMonstersData, fetchMonstersWinner } from "../../reducers/monsters/monsters.actions"
import { selectMonsters, selectSelectedMonster, selectSelectedMonsterComputer } from "../../reducers/monsters/monsters.selectors"
import { BattleSection, PageContainer, StartBattleButton } from "./BattleOfMonsters.styled"
import { WinnerDisplay } from "../../components/winner-display/WinnerDisplay"

const BattleOfMonsters = () => {
    const dispatch = useAppDispatch()

    const monsters = useSelector(selectMonsters)
    const selectedMonster = useSelector(selectSelectedMonster)
    const selectedMonsterComputer = useSelector(selectSelectedMonsterComputer)
    const [winner, setWinner] = useState<Winner | any >(null)

    useEffect(() => {

        if ( !winner && !selectedMonster) {
            dispatch(fetchMonstersData())
            setWinner(null)
        }

    }, [winner, selectedMonster]);

    const handleStartBattleClick = async () => {
        // Fight!
        setWinner(await dispatch(fetchMonstersWinner({monster1Id:selectedMonster!.id, monster2Id:selectedMonsterComputer!.id})).then((response)=>response.payload));
    }

    return (
        <PageContainer>
            <Title>Battle of Monsters</Title>

            <MonstersList monsters={monsters} />

            { selectedMonster && selectedMonsterComputer && winner && winner.winner && (
                <BattleSection>
                <WinnerDisplay text={winner.winner.name}></WinnerDisplay>
            </BattleSection>
            )}
            

            <BattleSection>
                <MonsterBattleCard monster={selectedMonster} title={selectedMonster?.name || "Player"}></MonsterBattleCard>
                <StartBattleButton data-testid="start-battle-button"  disabled={selectedMonster === null} onClick={handleStartBattleClick}>Start Battle</StartBattleButton>
                <MonsterBattleCard  monster={selectedMonsterComputer} title="Computer"></MonsterBattleCard>
            </BattleSection>
        </PageContainer>
    )
}

export { BattleOfMonsters }