import { useCallback, useEffect, useRef, useState } from "react"
import Card from "../components/candidatoCard/CandidatoCard"
import { updateVote } from "../util/update"

const CandidatosPage = () => {
    const [firstLocked, setFirstLocked] = useState(false)
    const [secondLocked, setSecondLocked] = useState(false)
    const [isLoged, setIsLoged] = useState(false)

    const firstLockedRef = useRef(false);
    const secondLockedRef = useRef(false);

    const vote = localStorage.getItem('vote') || '0';
    const userId = localStorage.getItem('userId');

    useEffect(() => {
        getVote()

        return () => {
            if (!userId) return;

            const firstVoted = !firstLockedRef.current
            const secondVoted = !secondLockedRef.current
            const anyVoted = firstVoted && secondVoted
            const voteState = {
                change: false,
                vote: '0'
            }

            if (anyVoted && vote !== '0') {
                voteState.change = true;
                voteState.vote = '0';
            } else if (firstVoted && (vote === '2' || vote === '0')) {
                voteState.change = true;
                voteState.vote = '1';
            } else if (secondVoted && (vote === '1' || vote === '0')) {
                voteState.change = true;
                voteState.vote = '2'
            }            

            if (voteState.change) {
                localStorage.setItem('vote', voteState.vote)
                updateVote(Number(userId), voteState.vote)
            }
        }
    }, [])

    useEffect(() => {
        firstLockedRef.current = firstLocked;
        secondLockedRef.current = secondLocked;
    }, [firstLocked, secondLocked]);

    const getVote = useCallback(() => {
        if (!userId) {
            setIsLoged(false);
            return;
        }

        setIsLoged(true);

        if (vote === '0') return;

        handleLock(vote === '1');
    }, []);

    const handleLock = (isFirst: boolean) => {
        if (isFirst) {
            setSecondLocked(!secondLocked);
        } else {
            setFirstLocked(!firstLocked);
        }
    }

    return (
        <div className="cand">
            <div className="cand-cont">
                <Card
                    handleLock={handleLock}
                    isLocked={firstLocked}
                    isLoged={isLoged}
                    isFirst
                />
                <Card
                    handleLock={handleLock}
                    isLocked={secondLocked}
                    isLoged={isLoged}
                />
            </div>
        </div>
    )
}

export { CandidatosPage }
