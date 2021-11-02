class Backtracking
{
	balancedBracket(result, n, open, close)
	{
		if (close == n)
		{
			return result ;
		}
		if (open < n)
		{
			// Add open parentheses
			this.balancedBracket(result + "(", 
                                 n, open + 1, close);
		}
		if (open > close)
		{
			// Add close parentheses
			this.balancedBracket(result + ")", 
                                 n, open, close + 1);
		}
        return this.balancedBracket(result)
	}
}

function balancedParens(n)
    {
        const task = new Backtracking();
        // This is a size of balanced parentheses
        let size = n
       return task.balancedBracket("", n, 0, 0);
    }


console.log(balancedParens(2))