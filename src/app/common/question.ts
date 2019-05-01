export class Question {
    private id: string;
    public title: string;
    public answer: boolean;
    public score: number;
    
    constructor(p_id: string, p_title: string, p_answer: boolean, p_score: number){
        this.id = p_id,
        this.title = p_title,
        this.answer = p_answer,
        this.score = p_score
    }
}
