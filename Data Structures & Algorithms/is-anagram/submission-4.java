class Solution {
    public boolean isAnagram(String s, String t) {
        boolean yes=true;
        //pre conditon
        if(s.length()!= t.length()){
            yes=false;
        }

        char[] sSort= s.toCharArray();
        char[] tSort= t.toCharArray();

        Arrays.sort(sSort);
        Arrays.sort(tSort);
        return Arrays.equals(sSort,tSort);
        

    }
}
