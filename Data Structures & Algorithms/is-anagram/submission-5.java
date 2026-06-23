class Solution {
    public boolean isAnagram(String s, String t) {
        

        //pre condition

        if(s.length()!=t.length()){
          return false;
        }

        //turn string to char array
        char[] sSort=s.toCharArray();
        char[] tSort=t.toCharArray();

        //alphabetical order-
        Arrays.sort(sSort);
        Arrays.sort(tSort);

        
        return Arrays.equals(sSort,tSort);
        


    }
}
